import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {projectCategoryType} from './projectCategoryType'
import {projectType} from './projectType'
import {projectTechnologyType} from './projectTechnologyType'
import {projectContributorType} from './projectContributorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, projectCategoryType, projectType, projectTechnologyType, projectContributorType],
}
