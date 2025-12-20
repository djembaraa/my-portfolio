export const skill = {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    { name: 'name', title: 'Skill Name', type: 'string' },
    { 
      name: 'category', 
      title: 'Category', 
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Tools/Others', value: 'tools' },
        ]
      }
    },
    { name: 'level', title: 'Proficiency (0-100)', type: 'number' },
  ],
}