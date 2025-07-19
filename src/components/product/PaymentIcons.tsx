import React from "react";
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcApplePay,
  FaCcPaypal,
  FaCcAmazonPay,
  FaGooglePay,
} from "react-icons/fa6";

const PaymentIcons: React.FC = () => (
  <div className="flex gap-3 mt-4 items-center justify-center">
    <FaCcMastercard size={24} />
    <FaCcVisa size={24} />
    <FaCcApplePay size={24} />
    <FaCcPaypal size={24} />
    <FaGooglePay size={24} />
    <FaCcAmazonPay size={24} />
  </div>
);

export default PaymentIcons;
