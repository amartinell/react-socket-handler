 export const contentTree = [
   {
     id: 'guides',
     label: 'Guide',
     icon: 'folder',
     type: 'container',
     children: [
       {
         id: 'categories',
         label: 'Categories',
         icon: 'folder',
         type: 'container',
         channel: 'guides.categories',
         metadata: [
           {
             name: 'created_at',
             label: 'Created at',
             type: 'datetime',
             searchable: true,
           },
           {
             name: 'updated_at',
             label: 'Updated at',
             type: 'datetime',
             searchable: true,
           },
           {
             name: 'outdated',
             label: 'Outdated',
             type: 'boolean',
             searchable: true,
           },
           {
             name: 'locale',
             label: 'Source language',
             type: 'string',
             searchable: true,
           },
         ],
       },
       {
         id: 'sections',
         label: 'Sections',
         icon: 'folder',
         type: 'container',
         channel: 'guides.sections',
         metadata: [
           {
             name: 'created_at',
             label: 'Created at',
             type: 'datetime',
             searchable: true,
           },
           {
             name: 'updated_at',
             label: 'Updated at',
             type: 'datetime',
             searchable: true,
           },
           {
             name: 'outdated',
             label: 'Outdated',
             type: 'boolean',
             searchable: true,
           },
           {
             name: 'locale',
             label: 'Source language',
             type: 'string',
             searchable: true,
           },
         ],
       },
       {
         id: 'articles',
         label: 'Articles',
         icon: 'folder',
         type: 'container',
         channel: 'guides.articles',
         metadata: [
           {
             name: 'draft',
             label: 'Draft',
             type: 'boolean',
             searchable: true,
           },
           {
             name: 'created_at',
             label: 'Created at',
             type: 'datetime',
             searchable: true,
           },
           {
             name: 'updated_at',
             label: 'Updated at',
             type: 'datetime',
             searchable: true,
           },
           {
             name: 'edited_at',
             label: 'Edited at',
             type: 'datetime',
             searchable: true,
           },
           {
             name: 'title',
             label: 'Title',
             type: 'string',
             searchable: true,
           },
           {
             name: 'outdated',
             label: 'Outdated',
             type: 'boolean',
             searchable: true,
           },
           {
             name: 'locale',
             label: 'Source language',
             type: 'string',
             searchable: true,
           },
         ],
       },
     ],
   },
   {
     id: 'support',
     label: 'Support',
     icon: 'folder',
     type: 'container',
     children: [
       {
         id: 'dynamicContents',
         label: 'Dynamic Content',
         icon: 'folder',
         type: 'container',
         channel: 'support.dynamicContents',
         metadata: [
           {
             name: 'created_at',
             label: 'Created at',
             type: 'datetime',
             searchable: true,
           },
           {
             name: 'updated_at',
             label: 'Updated at',
             type: 'datetime',
             searchable: true,
           },
           {
             name: 'outdated',
             label: 'Outdated',
             type: 'boolean',
             searchable: true,
           },
           {
             name: 'locale',
             label: 'Source language',
             type: 'string',
             searchable: true,
           },
         ],
       },
     ],
   },
 ]