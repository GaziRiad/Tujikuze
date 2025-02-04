import {DocumentIcon, ListIcon} from '@sanity/icons'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .id('home')
        .child(S.document().schemaType('home').documentId('home')),
      S.listItem()
        .title('Our Impact')
        .id('our-impact')
        .child(S.document().schemaType('our-impact').documentId('our-impact')),
      S.listItem()
        .title('About Us')
        .id('about')
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Our Offer')
        .id('our-offer')
        .child(S.document().schemaType('our-offer').documentId('our-offer')),
      S.divider(),

      S.listItem()
        .title('Reused sections')
        .child(
          S.list()
            .title('Reused sections')
            .items([
              S.listItem()
                .title('Footer')
                .id('footer')
                .child(S.document().schemaType('footer').documentId('footer')),
            ]),
        ),

      S.divider(),

      S.documentTypeListItem('category').title('Categories').icon(ListIcon),
      S.documentTypeListItem('post').title('Posts').icon(DocumentIcon),
      S.documentTypeListItem('case-study').title('Case Studies').icon(DocumentIcon),
    ])
