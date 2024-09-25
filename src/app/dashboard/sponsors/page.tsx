import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Component() {
    return (
        <main className="grid sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto p-4">
            <Card>
                <CardHeader>
                    <Image
                        src="/Images/Sponsor/Sponser1.jpg"
                        alt="Image 1"
                        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                        width="300"
                        height="300"
                    />
                </CardHeader>
                <CardContent>
                    <h2 className="text-lg font-bold">Image 1</h2>
                    <p className="text-gray-600">Image 1 description</p>
                    <div className="flex items-center space-x-2 mt-2">
                        {/* <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar> */}
                        {/* <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                            View more
                        </Link> */}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Image
                        src="/Images/Sponsor/Sponser2.jpg"
                        alt="Image 2"
                        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                        width="300"
                        height="300"
                    />
                </CardHeader>
                <CardContent>
                    <h2 className="text-lg font-bold">Image 2</h2>
                    <p className="text-gray-600">Image 2 description</p>
                    <div className="flex items-center space-x-2 mt-2">
                        {/* <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" alt="@janedoe" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar> */}
                        {/* <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                            View more
                        </Link> */}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Image
                        src="/Images/Sponsor/Sponser3.jpg"
                        alt="Image 3"
                        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                        width="300"
                        height="300"
                    />
                </CardHeader>
                <CardContent>
                    <h2 className="text-lg font-bold">Image 3</h2>
                    <p className="text-gray-600">Image 3 description</p>
                    <div className="flex items-center space-x-2 mt-2">
                        {/* <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" alt="@alexdoe" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar> */}
                        {/* <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                            View more
                        </Link> */}
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}