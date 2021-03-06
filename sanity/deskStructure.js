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
            .icon(()=> 'ð')
            .child(
              S.list()
                .title('Pages')
                .items([
                  S.listItem()
                    .title('About')
                    .icon(()=> 'ð¤')
                    .child(
                      S.list()
                        .title('Languages')
                        .items([
                          S.listItem()
                            .title('EspaÃ±ol - ES')
                            .icon(()=> 'ð¦ð·')
                            .child(
                              S.document()
                                .title('About - ES')
                                .schemaType('aboutEs')
                                .documentId('aboutEs')
                            ),
                            S.listItem()
                            .title('Italiano - IT')
                            .icon(()=> 'ð®ð¹')
                            .child(
                              S.document()
                                .title('About - IT')
                                .schemaType('aboutIt')
                                .documentId('aboutIt')
                            ),
                            S.listItem()
                            .title('English - EN')
                            .icon(()=> 'ð¬ð§')
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
          // ...S.documentTypeListItems().filter(item => !['aboutEn','aboutIt', 'aboutEs'].includes(item.getId()))
        ]
    )