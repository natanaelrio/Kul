import Update from "@/components/admin/update"

// export const metadata = {
//   title: 'Admin UPDATE',
//   description: 'Admin UPDATE',
// }

export function generateMetadata({ params }) {
  // read route params
  const id = params.updateid
  return {
    title: `DATA ${id}`,
  }
}


export default function Page({ params }) {
  return (
    <>
      <Update id={params.updateid} />
    </>
  )
}



