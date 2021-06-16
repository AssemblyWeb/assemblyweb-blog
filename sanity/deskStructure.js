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
                                .schemaType('aboutEs')
                                .documentId('aboutEs')
                            ),
                            S.listItem()
                            .title('Italiano - IT')
                            .icon(()=> '🇮🇹')
                            .child(
                              S.document()
                                .title('About - IT')
                                .schemaType('aboutIt')
                                .documentId('aboutIt')
                            ),
                            S.listItem()
                            .title('English - EN')
                            .icon(()=> '🇬🇧')
                            .child(
                              S.document()
                                .title('About - EN')
                                .schemaType('aboutEn')
                                .documentId('aboutEn')
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
          ...S.documentTypeListItems().filter(item => !['aboutEn','aboutIt', 'aboutEs'].includes(item.getId()))
        ]
    )