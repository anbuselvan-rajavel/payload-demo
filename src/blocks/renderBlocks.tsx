// import { cn } from '@/utilities/ui'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import { HeroComponent } from './hero/HeroComponent'
import { ProjectsComponent } from './projects/ProjectsComponent'

const blockComponents: { [key: string]: React.FC<any> } = {
  hero: HeroComponent,
  projects: ProjectsComponent,
}

export const RenderBlocks: React.FC<{
  blocks: NonNullable<Page['layout']>[number][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block: any, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
