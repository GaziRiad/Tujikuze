import {CogIcon, DocumentIcon, ListIcon} from '@sanity/icons'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .id('settings')
        .child(S.document().schemaType('settings').documentId('settings'))
        .icon(CogIcon),
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
      S.listItem()
        .title('Ressources Page')
        .id('ressourcesPage')
        .child(S.document().schemaType('ressourcesPage').documentId('ressourcesPage')),
      S.listItem()
        .title('Case Studies Page')
        .id('case-studies-page')
        .child(S.document().schemaType('case-studies-page').documentId('case-studies-page')),
      S.listItem()
        .title('Contact Us Page')
        .id('contact')
        .child(S.document().schemaType('contact').documentId('contact')),
      S.divider(),

      S.documentTypeListItem('category').title('Categories').icon(ListIcon),
      S.documentTypeListItem('post').title('Posts').icon(DocumentIcon),
      S.documentTypeListItem('case-study').title('Case Studies').icon(DocumentIcon),
    ])
