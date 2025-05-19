"use client";

import CreationFooter from "@/components/CreationFooter";
import InputField from "@/components/InputField";
import Stepper from "@/components/Stepper";
import StepsHeader from "@/components/StepsHeader";

// Set these to match your actual header/footer heights
const HEADER_HEIGHT = 120; // px
const FOOTER_HEIGHT = 80; // px

export default function CreatePostingPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen relative">
      {/* Fixed Header */}
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="max-w-sm mx-auto">
          <StepsHeader />
          <Stepper />
        </div>
      </div>

      {/* Scrollable Content */}
      <main
        className="flex-1 overflow-y-auto w-full"
        style={{ paddingTop: HEADER_HEIGHT, paddingBottom: FOOTER_HEIGHT }}
      >
        <div className="max-w-sm mx-auto px-4">
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
        </div>
      </main>

      {/* Fixed Footer */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white"
        style={{ height: FOOTER_HEIGHT }}
      >
        <div className="max-w-sm mx-auto h-full flex items-center">
          <CreationFooter />
        </div>
      </div>
    </div>
  );
}
