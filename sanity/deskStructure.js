// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
// import { GoBrowswer as GoHome } from 'react-icons/lib/go'
import * as Structure from 'sanity-plugin-intl-input/lib/structure';

// default implementation by re-exporting
// export const getDefaultDocumentNode = Structure.getDefaultDocumentNode;
// export default Structure.default;

// or manual implementation to use with your own custom desk structure
export const getDefaultDocumentNode = (props) => {
    if (props.schemaType === 'article') {
        return S.document().views(Structure.getDocumentNodeViewsForSchemaType(props.schemaType));
    }
    return S.document();
};

// export default () => {
//   const items = Structure.getFilteredDocumentTypeListItems();
//   return S.list()
//       .id('__root__')
//       .title('Content')
//       .items(items);
// };

export default () => {
  const items = Structure.getFilteredDocumentTypeListItems();
  return S.list()
    .id('__root__')
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
          ...S.documentTypeListItems().filter(item => !['aboutEn'].includes(item.getId()))
        ]
    )}