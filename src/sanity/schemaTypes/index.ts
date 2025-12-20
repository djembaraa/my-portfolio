import { type SchemaTypeDefinition } from 'sanity'
import { certification } from './certification'
import { project } from './project'
import { skill } from './skill'
import { contact } from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [certification, project, skill, contact],
}