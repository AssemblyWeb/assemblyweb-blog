// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
// import { GoBrowswer as GoHome } from 'react-icons/lib/go'

export default () => 
  S.list()
    .title('Content')
    .items(
        [
          S.listItem()
            .title('Pages')
            .icon(()=> '📖')
            .child(
              S.list()
                .title('Pages')
                .items([
                  S.listItem()
                    .title('About')
                    .icon(()=> '👤')
                    .child(
                      S.list()
                        .title('Languages')
                        .items([
                          S.listItem()
                            .title('Español - ES')
                            .icon(()=> '🇦🇷')
                            .child(
                              S.document()
                                .title('About - ES')
                                .schemaType('about')
                                .documentId('about')
                            ),
                            S.listItem()
                            .title('Italiano - IT')
                            .icon(()=> '🇮🇹')
                            .child(
                              S.document()
                                .title('About - IT')
                                .schemaType('about')
                                .documentId('about')
                            ),
                            S.listItem()
                            .title('English - EN')
                            .icon(()=> '🇬🇧')
                            .child(
                              S.document()
                                .title('About - EN')
                                .schemaType('about')
                                .documentId('about')
                            )
                        ])
                    ),
                  S.listItem()
                    .title('Contact me')
                ])
                // .schemaType('About')
                // .documentId('About')
            ),
          S.divider(),
          ...S.documentTypeListItems().filter(item => !['about'].includes(item.getId()))
        ]
    )