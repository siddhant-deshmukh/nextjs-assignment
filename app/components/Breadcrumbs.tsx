"use client"
import React from 'react'

export default function Breadcrumbs() {
  const currentPageNesting = [
    "Home",
    "Hosting for all",
    "Hosting",
    "Hosting5",
    "Hosting6",
  ]

  return (
    <div id="breadcrumb">
      {
        currentPageNesting.map((name, index) => {
          return <li key={index}>
            <div>
              {name}
            </div>
            <span hidden={index === currentPageNesting.length - 1}>
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z" fill="currentColor" />
              </svg>
            </span>
          </li>
        })
      }
    </div>
  )
}
