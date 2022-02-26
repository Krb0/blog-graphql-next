import { graphCMSImageLoader } from './util'
import Link from 'next/link'
import moment from 'moment'
import useRelatedPosts from '../../../../hooks/useRelatedPosts'
import Image from 'next/image'

interface IProps {
  categories?: string[]
  slug?: string | string[]
}

const PostsList = (props: IProps) => {
  const { categories, slug } = props
  const [relatedPosts] = useRelatedPosts(categories, slug)
  return (
    <>
      {relatedPosts.map((post) => (
        <div key={post.slug} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <Image
              loader={graphCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized={true}
              className="rounded-full object-cover align-middle"
              src={post.featuredImage.url}
            />
          </div>
          <div className="ml-4 flex-grow">
            <Link href={`/post/${post.slug}`}>
              <div className="cursor-pointer hover:opacity-80">
                <p className="font-xs text-gray-500">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </p>
                <span className="text-md" key={post.slug}>
                  {post.title}
                </span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostsList
