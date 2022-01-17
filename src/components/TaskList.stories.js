import react from 'react';
import TaskList from './TaskList';
import TaskListStories from './Task.stories';

export default {
    component:TaskList,
    title:'TaskList',
    decorators:[story => <div>{story()}</div>],
}

const Template = <TaskList {...args}/>

export const Default = Template.bind({});
// Default

