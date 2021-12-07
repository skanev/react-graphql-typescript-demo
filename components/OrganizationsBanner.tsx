import Link from 'next/link'
import React from 'react'
import classnames from 'classnames'

const organizations: [string, string][] = [
  ['Facebook', 'facebook'],
  ['Microsoft', 'microsoft'],
  ['Apollo', 'apollographql']
]

export function OrganizationsBanner({active}: {active?: string}) {
  return (
    <header className="py-4">
      <ul className="organizations">
        {organizations.map(([label, login]) => (
          <li key={login} className={classnames({active: login === active})}>
            <Link href={`/org/${login}`}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
