import React, { useState } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import BuyAKitModal from "./BuyAKitModal";

const stickerAmounts = [
  { amount: 50, price: 100 },
  { amount: 100, price: 172 },
];
const tableTopAmounts = [
  { amount: 25, price: 100 },
  { amount: 50, price: 172 },
  { amount: 100, price: 220 },
];
const baseFee = 64;

function BuildAKit(props) {
  const [tableTopAmount, setTableTopAmount] = useState(0);
  const [stickerAmount, setStickerAmount] = useState(0);

  const [buyAKitModal, setBuyAKitModal] = useState(false);

  function findTotal() {
    const tableTopAmountFound = tableTopAmounts.find(
      (element) => element.amount == tableTopAmount
    );
    const StickerAmountFound = stickerAmounts.find(
      (element) => element.amount == stickerAmount
    );
    return (
      (tableTopAmountFound?.price ? tableTopAmountFound?.price : 0) +
      (StickerAmountFound?.price ? StickerAmountFound?.price : 0) +
      baseFee
    );
  }
  return (
    <div className="flex-1 min-h-64 m-2 rounded-xl bg-cover shadow-2xl h-full bg-[url('https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <h2 className="text-center font-semibold mt-10 text-white/95">
        Build a Kit
      </h2>
      <h5 className="text-center font-light mt-5 text-white/90">
        Select Options Below
      </h5>
      <div className="w-full flex justify-center">
        <ScrollContainer>
          <div className="flex mt-6">
            {tableTopAmounts.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  tableTopAmount == item.amount
                    ? setTableTopAmount(0)
                    : setTableTopAmount(item.amount)
                }
                style={{
                  backgroundColor:
                    tableTopAmount == item.amount
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,.8)",
                }}
                className="w-56 cursor-pointer m-2 aspect-square items-center text-center flex flex-col justify-center rounded-lg backdrop-blur-md transition-all max-w-[75%]"
              >
                <h1>{item.amount}</h1> table tops
                <h7>${item.price}</h7>
              </div>
            ))}
          </div>
        </ScrollContainer>
      </div>
      <div className="w-full flex justify-center">
        <ScrollContainer>
          <div className="flex mt-6">
            {stickerAmounts.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  stickerAmount == item.amount
                    ? setStickerAmount(0)
                    : setStickerAmount(item.amount)
                }
                style={{
                  backgroundColor:
                    stickerAmount == item.amount
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,.8)",
                }}
                className="w-56 cursor-pointer m-2 aspect-square items-center text-center flex flex-col justify-center rounded-lg backdrop-blur-md transition-all max-w-[75%]"
              >
                <h1>{item.amount}</h1> Stickers
                <h7>${item.price}</h7>
              </div>
            ))}
          </div>
        </ScrollContainer>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => setBuyAKitModal(true)}
          className="p-2 w-28 mt-10 max-w-[95%] bg-white/80 rounded-lg transition-all hover:bg-white"
        >
          Build
          <h7>${findTotal()}</h7>
        </button>
      </div>
      <BuyAKitModal
        visible={buyAKitModal}
        onClose={() => setBuyAKitModal(false)}
      />
    </div>
  );
}

export default BuildAKit;
