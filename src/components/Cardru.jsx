/* eslint-disable no-unused-vars */
import React from 'react'
import BookMovieCardComponent from './BookMovieCardComponent'

export default function Cardru() {
  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
      {
        Array.from({length: 10}).map((_book, index) => (
          <BookMovieCardComponent key={index}/>
        ))
      }
    </div>
  )
}
