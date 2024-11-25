import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const towelTypes = [
  {
    title: "Bath Towels",
    description: "Experience pure comfort.",
    details: "Soft, luxurious, and ultra-absorbent—our bath towels transform your daily routine into a moment of indulgence.",
    icon: "🛁",
  },
  {
    title: "Hand Towels",
    description: "Simplicity, redefined.",
    details: "Compact, versatile, and crafted for precision. Our hand towels bring a touch of elegance and functionality to every space.",
    icon: "🤲",
  },
  {
    title: "Washcloths",
    description: "Gentle meets effective.",
    details: "Perfect for the delicate skin of your face or body, our washcloths offer soft, yet powerful cleansing.",
    icon: "🧼",
  },
  {
    title: "Beach Towels",
    description: "Sun, sand, and luxury.",
    details: "Oversized, vibrant, and quick-drying—our beach towels redefine your seaside experience.",
    icon: "🏖️",
  },
  {
    title: "Hand & Face Towels",
    description: "Every detail matters.",
    details: "Crafted for the finest care, these towels deliver exceptional softness and absorbency.",
    icon: "👐",
  },
  {
    title: "Hotel Towels",
    description: "A 5-star experience, at home.",
    details: "Luxuriously plush, durable, and ultra-absorbent—our hotel-quality towels bring the spa experience right to your bathroom.",
    icon: "🏨",
  },
  {
    title: "Gym Towels",
    description: "Performance, perfected.",
    details: "Lightweight, quick-drying, and super-absorbent—our gym towels are designed to keep you at your best.",
    icon: "🏋️",
  },
  {
    title: "Bamboo Terry Towels",
    description: "Eco-luxury reimagined.",
    details: "Naturally soft, antibacterial, and sustainable—our bamboo terry towels offer the ultimate in comfort while caring for the planet.",
    icon: "🎋",
  },
  {
    title: "Microfiber Towels",
    description: "Innovation in every thread.",
    details: "Quick-drying, ultra-absorbent, and incredibly lightweight—our microfiber towels are the perfect travel companion.",
    icon: "🧵",
  },
  {
    title: "Turkish Towels (Peshtemal)",
    description: "Timeless elegance.",
    details: "Soft, lightweight, and fast-drying—our Turkish towels offer a luxurious blend of tradition and modern design.",
    icon: "🇹🇷",
  },
]

export default function TowelShowcase() {
  return (
    <div id="Product" className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Discover Our <span className="text-blue-600">Premium Terry Products</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Uncompromising quality. Timeless design. Every day, made extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {towelTypes.map((towel, index) => (
            <motion.div
              key={towel.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">{towel.title}</CardTitle>
                    <span className="text-4xl" role="img" aria-label={towel.title}>
                      {towel.icon}
                    </span>
                  </div>
                  <CardDescription className="text-blue-600 font-medium">{towel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{towel.details}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">Soft</Badge>
                    <Badge variant="secondary">Absorbent</Badge>
                    <Badge variant="secondary">Durable</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold text-gray-900">
            Experience the difference. Choose quality. Choose comfort.
          </p>
          <p className="text-2xl font-bold text-blue-600 py-6">
              Products That Care For You
          </p>
          
        </motion.div>
      </div>
    </div>
  )
}