import React from 'react'
import { LinkElement } from '../../types/LinkElement'
import { Routes } from '../../enums/Routes'
import Link from 'next/link'

const headerLinks: Array<LinkElement> = [
  { name: 'subTitle1', path: Routes.PATH1 },
  { name: 'subTitle2', path: Routes.PATH2 }
]

export const Header: React.FC = () => {
  return (
    <header className="">
      <div className="main-header flex justify-around">
        <img src="/images/sample.svg" alt="Aimee logo" width="128px" height="36px" />
        <div className="header-link-wrapper flex justify-between">
          {headerLinks.map((headerLink) => {
            return (
              <Link key={headerLink.path} href={headerLink.path}>
                <a>{headerLink.name}</a>
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
