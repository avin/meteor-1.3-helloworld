import { Tasks } from './declare.js'

Meteor.methods({

    addTask(text){
        if(! Meteor.userId()){
            throw new Meteor.Error('non-authorized');
        }

        check(text, String);

        Tasks.insert({
            text,
            createdAt: new Date(),
            private: false,
            checked: false,
            owner: Meteor.userId,
            username: Meteor.user().username
        })
    },

    removeTask(taskId){
        const task = Tasks.findOne(taskId);

        if (task.private && task.owner !== Meteor.userId()){
            throw new Meteor.Error('non-authorized')
        }

        Tasks.remove(taskId);
    },

    setChecked(taskId, isChecked){
        const task = Tasks.findOne(taskId);

        if(task.private && task.owner !== Meteor.userId()){
            throw new Meteor.Error('non-authorized');
        }

        Tasks.update(taskId, {$set: {checked: isChecked}});
    },

    setPrivate(taskId, isPrivate){
        const task = Tasks.findOne(taskId);

        if (task.owner !== Meteor.userId()){
            throw new Meteor.Error('non-authorized');
        }

        Tasks.update(taskId, {$set: {private: isPrivate}});
    },

    editTaskText(taskId, text){
        const Task = Tasks.findOne(taskId);

        if (task.owner !== Mongo.userId()){
            throw new Mongo.Error('non-authorized');
        }

        check(text, String);

        Tasks.update(taskId, {$set: {text}});
    }
});