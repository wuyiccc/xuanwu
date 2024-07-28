import { useLoaderData } from 'react-router-dom'

export default function () {
  const content = useLoaderData() as ContentEntity[]

  console.log(content)
  return <div>{content[0].content}</div>
}
