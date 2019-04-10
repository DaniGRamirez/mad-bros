import React, { Fragment } from 'react'
import { buildUrl } from 'react-instafeed'
import instafeed from 'react-instafeed'
 
const options = {
    accessToken: 'access...',
    clientId: 'client...',
    get: 'user', // popular, user
    locationId: null,
    resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
    sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
    tagName: null,
    userId: 123,
  }


const data = instafeed(options)

const InstaFeed = () => {
  const { json, loading, error, abort } = buildUrl(options)
  if (loading) return 'Loading...'
  if (error) return `Error: ${error}`
  if (!json) return null
 
  const { data, meta, pagination } = json
 
  return (      
    <Fragment>
      {// eslint-disable-next-line no-unused-vars
      data &&
        data.map(({ caption, id, images, tags }, index) => {
          const image = images[options.resolution]
          return (
              <div>
                  <h1>Texto de prueba</h1>
                {/* <Image
                    key={index}
                    url={image.url}
                    title={caption.text}
                    caption={caption.text}
                    width={image.width}
                    height={image.height} */}
                />
            </div>
          )
        })}
    </Fragment>
  )
}

export default InstaFeed;