"use client";

import CreationFooter from "@/components/CreationFooter";
import InputField from "@/components/InputField";
import Stepper from "@/components/Stepper";
import StepsHeader from "@/components/StepsHeader";

export default function CreatePostingPage() {
  return (
    <div className="bg-white h-screen flex flex-col">
      <StepsHeader />
      <Stepper />

      <div className="mt-20 px-10">
        <InputField id="gig-title" label="Gig title" />
        <InputField id="gig-category" label="Gig Category" />

        <div className="grid grid-cols-2 gap-6">
          <InputField id="gig-date" label="Date" />
          <InputField id="gig-time" label="Time" />
        </div>
        <InputField id="gig-location" label="Gig Location" />
        <InputField
          id="gig-description"
          label="Gig Description"
          isTextarea
          rows={5}
        />
        <div className=""></div>
      </div>

      <CreationFooter />
    </div>
  );
}
