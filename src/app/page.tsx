import Navbar from '@/components/Navbar'
import { db } from '@/db'
export default async function Home() {
	// const result = await db.query.test.findMany()
	// console.log(result)
	return (
		<div>
			<Navbar />
		</div>
	)
}
