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
                    <h2 className="text-lg font-bold">Dream11 (Primary Sponsor):</h2>
                    <p className="text-gray-600">Dream11, India&apos;s leading fantasy sports platform, proudly serves as the primary sponsor of the WebBuzz tournament, fueling the excitement of cricket enthusiasts. With Dream11, fans can engage in real-time fantasy play while enjoying the tournament action.
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
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
                    <h2 className="text-lg font-bold">Jio Cinema (Streaming Partner):</h2>
                    <p className="text-gray-600">Jio Cinema brings the thrill of WebBuzz cricket to your screens, offering seamless live streaming of all matches. Watch the tournament from anywhere, anytime, with uninterrupted streaming quality.</p>
                    <div className="flex items-center space-x-2 mt-2">
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
                    <h2 className="text-lg font-bold">Puma (Apparel Sponsor):</h2>
                    <p className="text-gray-600">Puma, a global leader in sportswear, is the official apparel sponsor for the WebBuzz cricket tournament. Puma&apos;s high-performance gear will empower the players to showcase their best on the field.                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Image
                        src="/Images/Sponsor/Sponser4.jpg"
                        alt="Image 3"
                        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                        width="300"
                        height="300"
                    />
                </CardHeader>
                <CardContent>
                    <h2 className="text-lg font-bold">Marriott (Hospitality Partner):</h2>
                    <p className="text-gray-600">Marriott Hotels is the official hospitality partner of WebBuzz, ensuring premium accommodation and world-class services for all players, teams, and VIPs. Experience luxury and comfort off the field with Marriott.</p>
                    <div className="flex items-center space-x-2 mt-2">
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Image
                        src="/Images/Sponsor/Sponser5.jpg"
                        alt="Image 3"
                        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                        width="300"
                        height="300"
                    />
                </CardHeader>
                <CardContent>
                    <h2 className="text-lg font-bold">Tata Motors (Prize Sponsor):</h2>
                    <p className="text-gray-600">Tata Motors, renowned for its innovation and excellence, is the proud prize sponsor for the WebBuzz tournament. Top performers and winning teams will be awarded exciting rewards, courtesy of Tata Motors.</p>
                    <div className="flex items-center space-x-2 mt-2">
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}