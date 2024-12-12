import { ArrowLeft, BadgeInfo } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex mb-10 text-blue-600 font-bold">
          <ArrowLeft /> Back
        </div>
        <div className="flex justify-between items-center my-7">
          <h1 className="text-2xl font-bold">Enter Your Details</h1>
          <span>Date of Application: 02/04/2024</span>
        </div>
        <div className="accordion">
          <Accordion type="single" defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-blue-50 px-4 decoration-muted font-bold rounded-tr-2xl rounded-tl-2xl">
                Selcet scheme under which you want to transfer the funds.
              </AccordionTrigger>
              <AccordionContent className="p-4 border-r-2 rounded-br-2xl border-l-2 rounded-bl-2xl">
                <div className="flex justify-between items-center gap-x-4">
                  <div className="border p-4 rounded-2xl">
                    <div className="flex justify-between items-center">
                      <span>USD 1 Million Scheme</span>
                      <RadioGroup defaultValue="option-one" name="selectScheme">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option one" id="option-one" />
                        </div>
                      </RadioGroup>
                    </div>
                    <hr className="m-3" />
                    <ul>
                      <li>
                        Fund transfer limit 1 Million USD per financial year
                      </li>
                      <li>
                        Taxes must be paid for balcances held i your NR account
                        before transferring funds to your Overseas account.
                      </li>
                    </ul>
                  </div>
                  <div className="border p-4 rounded-2xl">
                    <div className="flex justify-between items-center">
                      <p>Current Income Scheme</p>
                      <RadioGroup defaultValue="option-two" name="selectScheme">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option two" id="option-two" />
                        </div>
                      </RadioGroup>
                    </div>
                    <hr className="m-3" />
                    <ul>
                      <li>No minimum and maximum fund transfer limit.</li>
                      <li>
                        If your source of funds are either of dividend,
                        interest, Rent or Pension and should not be dilluted.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-5">
                  <Link className="text-blue-600 font-bold" href={"/"}>
                    Know More
                  </Link>
                </div>
                <hr className="border-b-stone-700 border-dashed my-4" />
                <p className="text-xs text-gray-500">
                  Purpose code for above scheme
                </p>
                <h1 className="text-sm font-bold">
                  S0014MIO1-REPATRIATION OF NRO FUNDS USD 1 MILLION
                </h1>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="accordion mt-6">
          <Accordion type="single" defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-blue-50 px-4 decoration-muted font-bold rounded-tr-2xl rounded-tl-2xl">
                Debit Account Details NRO Account
              </AccordionTrigger>
              <AccordionContent className="p-4 border-r-2 rounded-br-2xl border-l-2 rounded-bl-2xl">
                <h1 className="mb-3 font-bold">
                  Account from which you want to transger the amount
                </h1>
                <div className="flex justify-between items-center gap-x-4">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Debit Account Number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3756 3854 57688 88">
                        3756 3854 57688 88
                      </SelectItem>
                      <SelectItem value="3854 3756 57688 88">
                        3854 3756 57688 88
                      </SelectItem>
                      <SelectItem value="3854 57688 3756 88">
                        3854 57688 3756 88
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <Input type="text" placeholder="Either or Survior" />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <hr className="border-b-stone-700 border-dashed my-4" />
                <h1 className="text-xl font-bold my-4">
                  Account Holder Details
                </h1>
                <div className="flex gap-60 items-center mb-4">
                  <div>
                    <span className="text-xs text-gray-500">Name</span>
                    <h1 className="font-bold">Rajat Katiyar</h1>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Customer</span>
                    <h1 className="font-bold">65733854</h1>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">PAN</span>
                    <h1 className="font-bold">TW*****5Y</h1>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Address</span>
                  <h1 className="font-bold">
                    Villa 12, Happy Homes, Near Joggers Park, Nashik,
                    Maharashtra, India, PIN 400053
                  </h1>
                </div>
                <h1 className="text-xl font-bold my-4">Other Details</h1>
                <div className="flex justify-between items-center gap-x-4">
                  <div className="w-full">
                    <span className="text-xs text-gray-500">
                      Passport Number
                    </span>
                    <Input type="text" placeholder="Passport Number" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-gray-500">
                      Date of Passport Issue
                    </span>
                    <Input type="date" placeholder="Date of Passport Issue" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-gray-500">
                      Place of Passport issue
                    </span>
                    <Input type="text" placeholder="Place of Passport issue" />
                  </div>
                </div>
                <div className="flex justify-between items-center gap-x-4 mt-4">
                  <div className="w-1/3">
                    <span className="text-xs text-gray-500">Nationality</span>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Indian">Indian</SelectItem>
                        <SelectItem value="Chinese">Chinese</SelectItem>
                        <SelectItem value="Australian">Australian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <h1 className="text-xl font-bold my-4">Amount Details</h1>
                <div className="flex justify-between items-center gap-x-4">
                  <div className="w-full">
                    <span className="text-xs text-gray-500">
                      Enter Transfer Amount (in INR)
                    </span>
                    <Input type="text" placeholder="10,00,000" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-gray-500">
                      Select Currency of Transfer
                    </span>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Currency of Transfer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Indian">
                          GBP (Pound Sterling)
                        </SelectItem>
                        <SelectItem value="Chinese">Chinese</SelectItem>
                        <SelectItem value="Australian">Australian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="w-full">Rupees 10Lakhs Only</div>

                <div className="flex items-center alert mt-4 p-3 bg-blue-50 rounded-xl font-bold text-blue-800">
                  <BadgeInfo className="mr-3" /> Please make sure amount entered
                  in NR is matching with the amount mentioned in 15CA/CB
                  certification.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="accordion mt-6">
          <Accordion type="single" defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-blue-50 px-4 decoration-muted font-bold rounded-tr-2xl rounded-tl-2xl">
                Credit Account Details (Overseas Account)
              </AccordionTrigger>
              <AccordionContent className="p-4 border-r-2 rounded-br-2xl border-l-2 rounded-bl-2xl">
                <h1 className="font-bold mb-4">Beneficiary/Receiver Details</h1>
                <div className="flex items-center gap-x-4">
                  <div className="w-1/4">
                    <span className="text-xs text-gray-500">
                      Name of the Receiver
                    </span>
                    <Input type="text" placeholder="Name of the Receiver" />
                  </div>
                  <div className="w-1/4">
                    <span className="text-xs text-gray-500">
                      Credit Account Number
                    </span>
                    <Input type="text" placeholder="Credit Account Number" />
                  </div>
                </div>
                <h1 className="font-bold my-4">Address of the Receiver</h1>
                <div className="grid grid-cols-3 gap-x-7 gap-y-4 ">
                  <div className="w-full">
                    <span className="text-xs text-gray-500">
                      Address Line 1
                    </span>
                    <Input type="text" placeholder="Address Line 1" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-gray-500">
                      Address Line 2
                    </span>
                    <Input type="text" placeholder="Address Line 2" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-gray-500">
                      Address Line 3
                    </span>
                    <Input type="text" placeholder="Address Line 3" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-gray-500">PIN</span>
                    <Input type="text" placeholder="PIN" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-gray-500">City</span>
                    <Input type="text" placeholder="City" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-gray-500">State</span>
                    <Input type="text" placeholder="State" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-gray-500">Country</span>
                    <Input type="text" placeholder="Country" />
                  </div>
                </div>
                <div className="">
                  <h1 className="font-bold my-4">Beneficiary Bank Details</h1>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="w-full">
                      <span className="text-xs text-gray-500">
                        Name of the Bank
                      </span>
                      <Input type="text" placeholder="Name of the Bank" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">Swift Code</span>
                      <Input type="text" placeholder="Swift Code" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">IBAN</span>
                      <Input type="text" placeholder="IBAN" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <h1 className="font-bold my-4">Beneficiary Bank Address</h1>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="w-full">
                      <span className="text-xs text-gray-500">
                        Address Line 1
                      </span>
                      <Input type="text" placeholder="Address Line 1" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">
                        Address Line 2
                      </span>
                      <Input type="text" placeholder="Address Line 2" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">
                        Address Line 3
                      </span>
                      <Input type="text" placeholder="Address Line 3" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">PIN</span>
                      <Input type="text" placeholder="PIN" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">City</span>
                      <Input type="text" placeholder="City" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">State</span>
                      <Input type="text" placeholder="State" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">Country</span>
                      <Input type="text" placeholder="Country" />
                    </div>
                  </div>
                </div>

                <div className="">
                  <h1 className="font-bold my-4">
                    Correspondence Bank Details
                  </h1>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="w-full">
                      <span className="text-xs text-gray-500">
                        Name of the Bank
                      </span>
                      <Input type="text" placeholder="Name of the Bank" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">Swift Code</span>
                      <Input type="text" placeholder="Swift Code" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">IBAN</span>
                      <Input type="text" placeholder="IBAN" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="w-full">
                      <span className="text-xs text-gray-500">
                        Address Line 1
                      </span>
                      <Input type="text" placeholder="Address Line 1" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">
                        Address Line 2
                      </span>
                      <Input type="text" placeholder="Address Line 2" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">
                        Address Line 3
                      </span>
                      <Input type="text" placeholder="Address Line 3" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">PIN</span>
                      <Input type="text" placeholder="PIN" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">City</span>
                      <Input type="text" placeholder="City" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">State</span>
                      <Input type="text" placeholder="State" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">Country</span>
                      <Input type="text" placeholder="Country" />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
