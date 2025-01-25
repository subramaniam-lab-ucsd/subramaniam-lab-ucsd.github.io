import { defineCollection, defineContentConfig, z} from '@nuxt/content'

export default defineContentConfig({
  collections: {
    research: defineCollection({
      source: 'research/**/*.md',
      type: 'page'
      }),
    root: defineCollection({
        source: '*.md',
        type: 'page'
        }),
    members: defineCollection({
        type: 'data',
        source: 'members/*.yml',
        schema: z.object({
            name: z.string(),
            avatar: z.string(),
            url: z.string()
      })
    }),
    publications: defineCollection({
        type: 'data',
        source: 'publications/*.yml',
        schema: z.object({
            name: z.string(),
            avatar: z.string(),
            url: z.string()
      })
    })
    }


})
