// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity
import works from './works';
import aboutEs from './about/aboutEs';
import aboutIt from './about/aboutIt';
import aboutEn from './about/aboutEn';

const supportedLanguages = [
  { id: 'en_US', title: 'English', isDefault: true },
  { id: 'es_ES', title: 'Spanish' },
  { id: 'it_IT', title: 'Italian' }
]
const baseLanguage = supportedLanguages.find(l => l.isDefault)

const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}

const article = {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`
    }
  }
}

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([works, aboutIt, aboutEn, aboutEs, article, localeString]),
});


