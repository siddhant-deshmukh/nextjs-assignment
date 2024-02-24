"use client"

import React from 'react'
import "../itemslist.scss"
import StarsList from './StarsList';

interface IItem {
  tag?: string;
  imgName?: string;
  title: string;
  description: string;
  whatYouGet?: string;
  rating: number;
  review?: [number, string][];
  whyLoveIt?: string[];
  stars: number,
  oneWord: string
}

const list: IItem[] = [
  {
    tag: "Best Choice",
    imgName: "Builder 1",
    title: "WixPro 72-Inch Responsive Website Builder",
    description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    whatYouGet: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.8,
    stars: 5,
    oneWord: "Exceptional",
  },
  {
    tag: "Best Value",
    imgName: "Builder",
    title: "SiteCraft 68-Inch Ultimate Web Design Studio",
    description: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    whatYouGet: "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: 9.5,
    stars: 4.5,
    oneWord: "Excellent",
  },
  {
    title: "WixPro 72-Inch Responsive Website Builder",
    imgName: "Builder 1",
    description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    whatYouGet: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.3,
    stars: 5,
    oneWord: "Exceptional",
  },
  {
    title: "CDK Resposive Builder",
    imgName: "CDK",
    description: "An extensive library of widgets and apps, and detailed step-by-step guides",
    rating: 9.1,
    stars: 4,
    oneWord: "Very Good",
    review: [
      [9.9, "Building Responsive"],
      [8.9, "Cool"],
      [8.9, "Docs"],
    ],
    whyLoveIt: [
      "Documentation",
      "Easy Use",
      "Out of Box"
    ]
  },
]

export default function ItemsList() {
  return (
    <section id="items-list">
      {
        list.map((listItem, index) => {
          return <div key={index}>
            {
              listItem.tag &&
              <div className='special-tag'>
                {
                  listItem.tag === "Best Choice" &&
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.375 1.6665C4.375 1.32133 4.65482 1.0415 5 1.0415H15C15.3452 1.0415 15.625 1.32133 15.625 1.6665V7.35278C15.625 10.5234 13.1236 13.1248 10 13.1248C6.87644 13.1248 4.375 10.5234 4.375 7.35278V1.6665ZM5.625 2.2915V7.35278C5.625 9.86744 7.60071 11.8748 10 11.8748C12.3993 11.8748 14.375 9.86744 14.375 7.35278V2.2915H5.625Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.0415 4.58301C1.0415 4.23783 1.32133 3.95801 1.6665 3.95801H4.99984C5.34502 3.95801 5.62484 4.23783 5.62484 4.58301V8.74967C5.62484 9.09485 5.34502 9.37467 4.99984 9.37467C2.92768 9.37467 1.0415 7.64239 1.0415 4.58301ZM2.32395 5.20801C2.50507 6.88881 3.41739 7.77588 4.37484 8.03944V5.20801H2.32395Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.375 4.58301C14.375 4.23783 14.6548 3.95801 15 3.95801H18.3333C18.6785 3.95801 18.9583 4.23783 18.9583 4.58301C18.9583 7.64239 17.0722 9.37467 15 9.37467C14.6548 9.37467 14.375 9.09485 14.375 8.74967V4.58301ZM15.625 5.20801V8.03944C16.5824 7.77588 17.4948 6.88881 17.6759 5.20801H15.625Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 12.708C10.3452 12.708 10.625 12.9878 10.625 13.333V14.9997C10.625 15.3449 10.3452 15.6247 10 15.6247C9.65482 15.6247 9.375 15.3449 9.375 14.9997V13.333C9.375 12.9878 9.65482 12.708 10 12.708Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.25514 14.6726C7.36887 14.4877 7.57042 14.375 7.78752 14.375H12.101C12.3111 14.375 12.5071 14.4805 12.6228 14.6559L14.2717 17.1559C14.3983 17.3478 14.4093 17.5938 14.3003 17.7963C14.1913 17.9987 13.9799 18.125 13.75 18.125H6.25C6.0236 18.125 5.81491 18.0026 5.70445 17.805C5.59398 17.6073 5.59902 17.3654 5.71762 17.1726L7.25514 14.6726ZM8.13687 15.625L7.36812 16.875H12.5891L11.7646 15.625H8.13687Z" fill="white" />
                  </svg>
                }
                {
                  listItem.tag === "Best Value" &&
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.88981 1.77204C4.00126 1.57794 4.208 1.45825 4.43182 1.45825H15.5683C15.792 1.45825 15.9987 1.57794 16.1102 1.77204L19.292 7.31371C19.4234 7.54239 19.397 7.82886 19.2261 8.02975L10.4762 18.3214C10.3574 18.4611 10.1833 18.5416 10 18.5416C9.81668 18.5416 9.64259 18.4611 9.52384 18.3214L0.773841 8.02975C0.603042 7.82886 0.576697 7.54239 0.707994 7.31371L3.88981 1.77204ZM4.79366 2.70825L2.01087 7.55494L10 16.9516L17.9891 7.55494L15.2064 2.70825H4.79366Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.22447 1.49382C4.55009 1.37931 4.90691 1.55044 5.02142 1.87607L9.99999 16.0329L14.9786 1.87607C15.0931 1.55044 15.4499 1.37931 15.7755 1.49382C16.1011 1.60833 16.2723 1.96514 16.1578 2.29077L10.5896 18.1241C10.5016 18.3744 10.2652 18.5417 9.99999 18.5417C9.73474 18.5417 9.49839 18.3744 9.41039 18.1241L3.84221 2.29077C3.72769 1.96514 3.89883 1.60833 4.22447 1.49382Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.625 7.625C0.625 7.27981 0.904822 7 1.25 7H18.75C19.0951 7 19.375 7.27981 19.375 7.625C19.375 7.97018 19.0951 8.25 18.75 8.25H1.25C0.904822 8.25 0.625 7.97018 0.625 7.625Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.45825C10.2122 1.45825 10.4099 1.5659 10.525 1.74413L14.1046 7.2858C14.2919 7.57575 14.2086 7.96263 13.9187 8.14991C13.6287 8.3372 13.2419 8.25398 13.0546 7.96403L10 3.23514L6.94548 7.96403C6.7582 8.25398 6.37132 8.3372 6.08137 8.14991C5.79142 7.96263 5.7082 7.57575 5.89548 7.2858L9.47503 1.74413C9.59016 1.5659 9.78785 1.45825 10 1.45825Z" fill="white" />
                  </svg>
                }
                {listItem.tag}
              </div>
            }
            <div className='absolute'>{index}</div>
            <div className='img-info-container'>
              <div className='img-part'>
                <img src="./item-img.jpg" />
                <div>{listItem.imgName}</div>
              </div>
              <div className='info-part'>
                <div className='title-desc'>
                  <strong>{listItem.title}:</strong> {listItem.description}
                </div>
                <div className='main-highlights'>
                  <h5>Main highlights</h5>
                  {
                    listItem.whatYouGet && <div className='what-u-get'>
                      [What You Get]: {listItem.whatYouGet}
                    </div>
                  }
                  {
                    listItem.review && <div className='top-reviews'>
                      {
                        listItem.review.map(([rating, comment], index) => {
                          return <div key={index}>
                            <span>{rating}</span>
                            <div>{comment}</div>

                          </div>
                        })
                      }
                    </div>
                  }
                  {
                    listItem.whyLoveIt && <div className='why-love-it'>
                      <p>Why we love it</p>
                      {
                        listItem.whyLoveIt.map((tag, index) => {
                          return <div key={index}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              {/* <path fillRule="evenodd" clipRule="evenodd" d="M3.66534 3.99892C5.28581 2.46375 7.52625 1.51318 9.99984 1.51318C12.4734 1.51318 14.7138 2.46375 16.3343 3.99892C17.9547 5.53411 18.9582 7.65663 18.9582 10C18.9582 12.3434 17.9547 14.4659 16.3343 16.0011C14.7138 17.5362 12.4734 18.4869 9.99984 18.4869C7.52625 18.4869 5.28581 17.5362 3.66534 16.0011C2.04488 14.4659 1.0415 12.3434 1.0415 10C1.0415 7.65663 2.04488 5.53411 3.66534 3.99892ZM9.99984 2.69739C7.87109 2.69739 5.94486 3.51412 4.54921 4.83629C3.15359 6.15848 2.2915 7.98332 2.2915 10C2.2915 12.0168 3.1536 13.8416 4.54923 15.1637C5.94486 16.4859 7.87109 17.3027 9.99984 17.3027C12.1286 17.3027 14.0548 16.4859 15.4504 15.1637C16.8461 13.8416 17.7082 12.0168 17.7082 10C17.7082 7.98332 16.8461 6.15847 15.4504 4.83629C14.0548 3.51412 12.1286 2.69739 9.99984 2.69739Z" fill="currentColor" /> */}
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.6084 7.21285C14.8525 7.44408 14.8525 7.81899 14.6084 8.05022L9.60845 12.787C9.36437 13.0183 8.96864 13.0183 8.72456 12.787L6.22456 10.4186C5.98048 10.1874 5.98048 9.81251 6.22456 9.58127C6.46864 9.35004 6.86437 9.35004 7.10845 9.58127L9.16651 11.531L13.7246 7.21285C13.9686 6.98162 14.3644 6.98162 14.6084 7.21285Z" fill="currentColor" />
                            </svg>
                            <span>{tag}</span>
                          </div>
                        })
                      }
                    </div>
                  }
                  <button>
                    <span>Show More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='rating-part'>
              <div className='rating'>
                <h1>{listItem.rating}</h1>
                <div className='starlist-container'>
                  <h4>{listItem.oneWord}</h4>
                  <StarsList count={listItem.stars} />
                </div>
              </div>
              <button>
                View
              </button>
            </div>
          </div>
        })
      }
    </section>
  )
}
