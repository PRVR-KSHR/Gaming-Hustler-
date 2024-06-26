import React from "react";
import { motion } from "framer-motion";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { toast } from "react-toastify";
import { useUser } from "../../../hooks/useUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Card = ({
  name,
  image,
  availableSeats,
  price,
  totalEnrolled,
  prizePoolFirst,
  slot,
  prizePoolSecond,
  prizePoolThird,
  id: itmId,
}) => {
  const axiosFetch = useAxiosFetch();
  const axiosSecure = useAxiosSecure();
  const { currentUser } = useUser();
  const role = currentUser?.role;

  const handleSelect = (id) => {
    if (!currentUser) {
      return toast.error("Please Login First");
    }
    axiosSecure.get(`/cart-item/${id}`).then((res) => {
      if (res.data.classId === id) {
        return toast.error("Already Selected");
      } else {
        const data = {
          classId: id,
          userMail: currentUser.email,
          date: new Date(),
        };

        toast.promise(axiosSecure.post("/add-to-cart", data), {
          pending: "Selecting...",
          success: {
            render({ data }) {
              return `Selected Successfully`;
            },
          },
          error: {
            render({ data }) {
              return `Error: ${data.message}`;
            },
          },
        });
      }
    });
  };

  console.log("Slot:", slot);
  console.log("Prize Pool First:", prizePoolFirst);
  console.log("Prize Pool Second:", prizePoolSecond);
  console.log("Prize Pool Third:", prizePoolThird);

  return (
    <motion.div
      className="shadow-lg rounded-lg p-3 flex flex-col justify-between border-4 border-secondary overflow-hidden m-4 bg-[url('https://html.vecurosoft.com/gamio/demo/assets/img/bg/testi-bg-1-1.jpg')]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.img
        loading="lazy"
        className="h-48 w-full object-cover"
        src={image}
        alt={name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <div className="p-4">
        <motion.h2
          className="text-xl font-semibold mb-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {name}
        </motion.h2>
        <motion.p
          className="text-sky-300 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Available Seats: {availableSeats}
        </motion.p>
        <motion.p
          className="text-sky-300 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Price: ₹{" "}{price}
        </motion.p>
        <motion.p
          className="text-sky-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Total Players: {totalEnrolled}
        </motion.p>
        <div className="text-center mt-2">
          {role === "user" ? (
            <motion.button
              onClick={() => handleSelect(itmId)}
              className="px-3 w-full py-1 bg-secondary rounded-xl text-white font-bold mt-2"
            >
              Select
            </motion.button>
          ) : (
            <motion.button
              disabled
              className="px-3 w-full py-1 bg-secondary rounded-xl text-white font-bold mt-2 opacity-50 cursor-not-allowed"
            >
              Select
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
