import Bookmark from '../Bookmark/Bookmark'
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
        <div>
            <h3 className="text-4xl">Reading Time: {readingTime}</h3>
        </div>
        <div>
            <h3 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h3>
        </div>
            <h3 className="text-3xl text-center bg-gray-300">Bookmarks: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark=> <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks