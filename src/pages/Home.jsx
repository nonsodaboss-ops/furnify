import React from 'react'
import { furnitureItems } from '../utilities/data'
import Item from '../components/Item'
import Room from '../components/Room'
import Review from '../components/Review'
import {reviews, roomDecor } from "../utilities/data";

const Home = () => {
  return (
        <div>
          <section className="mt-20 space-x-10 flex justify-between">
            <div className="space-y-5">
              <h3 className="font-bold text-3xl">Welcome to Furniture world</h3>
              <p className="text-sm">Discover our mouth-watering dishes</p>
              <input
                type="text"
                placeholder="Search"
                className="bg-[#BFD4CD] p-0.5 rounded-full w-80 pl-2"
              />
              <div>
                <button className="bg-[#BFD4CD] rounded-sm p-2 px-5 border w-37">
                  View Menu
                </button>
                <button className="ml-3 rounded-sm p-2 px-5 border w-37">
                  Search
                </button>
              </div>
            </div>
            <img
              src="https://www.shutterstock.com/image-illustration/modern-living-room-interior-sofa-260nw-1640303782.jpg"
              alt=""
              className="rounded-xl h-80 w-120"
            />
          </section>
          <section className="text-center bg-blue-300 w-110 p-7 rounded-2xl bg-linear-to-r from-white to-[#E3ECE9] absolute top-110">
            <h4 className="font-bold">Design your new us with us</h4>
            <p>
              From modern minimalism to warm, layered elegance, our designs are
              thoughtfully tailored to reflect your lifestyle and vision.
            </p>
          </section>
          <section className="bg-[#C0D5CE] mt-50 px-20 py-8 rounded-2xl flex space-x-20">
            {furnitureItems.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </section>
          <section className="flex space-x-5 mt-20 justify-center">
            {roomDecor.map((room, index) => (
              <Room key={index} name={room.roomType} image={room.image} />
            ))}
          </section>
          <section className="mt-30 text-center w-245">
            <h1 className="text-2xl font-bold mb-10">Our Reviews</h1>
            <div className="flex space-x-3 pl-20 pr-5">
              {reviews.map((review, index) =>
                index === 1 ? (
                  <Review
                    key={index}
                    {...review}
                    bg={"bg-[#C0D5CE] border-none"}
                  />
                ) : (
                  <Review key={index} {...review} />
                )
              )}
            </div>
          </section>
          <section className="w-220 ml-20 bg-[#C0D5CE] h-60 mt-20 rounded-3xl flex justify-center space-x-10 items-center">
            <div className="w-60 space-y-4">
              <h1 className="text-2xl font-bold">
                Get 40% OFF this Eid on all products
              </h1>
              <button className="bg-white px-5 rounded-md font-400 text-md">
                Check out
              </button>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/384/527/original/table-lamp-clipart-design-illustration-free-png.png"
              alt=""
              className="h-50"
            />
          </section>
          <section className="mt-35 flex items-center space-x-30">
            <div className="bg-[#BCD1CA] rounded-2xl w-fit relative ml-11">
              <img
                src="https://pics.craiyon.com/2023-10-02/454910b10e82452786c77a3e6c93aadc.webp"
                alt=""
                className="w-100 rounded-xl relative left-12 bottom-12"
              />
            </div>
            <div className="w-100  relative bottom-10">
              <h1 className="font-bold bg-[#BCD1CA] w-fit rounded-sm p-1">
                About Us
              </h1>
              <p>
                We create and source furniture designed to make your home
                comfortable, functional, and stylish. Every piece is chosen for
                its quality, durability, and timeless design. Our goal is to
                make furnishing your space easy and stress-free, with reliable
                service and furniture you can enjoy for years to come.
              </p>
            </div>
          </section>
        </div>
  )
}

export default Home