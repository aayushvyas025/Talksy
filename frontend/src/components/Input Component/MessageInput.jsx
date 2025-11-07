import  { useRef, useState } from "react";
import { useChatStore } from "../../store";
import { helperFunctions } from "../../helper";
import ImagePreviewComponent from "../Static Components/ImagePreviewComponent";
import FormComponent from "../Pages Helper Component/FormComponent";
import ChatInput from "./ChatInput";
import ImageInput from "./ImageInput";
import Button from "../Pages Helper Component/Button";
import { Image, Send } from "lucide-react";

function MessageInput() {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessages } = useChatStore();
  const { imageHandling } = helperFunctions;
  const { handleImageChange, removeImageHandler } = imageHandling;

  async function sendMessagesHandler(event) {
    event.preventDefault();
    if(!text.trim() && !imagePreview) return; 
    try {
      await sendMessages({
      text:text,
      image:imagePreview
      });
      // clearing form
      setText("");
      setImagePreview(null);
      if(fileInputRef.current) fileInputRef.current.value = ""

    } catch (error) { 
      console.error(`Error While Sending Messages : ${error.message}`);     
    }
  }

  return (
    <div className="p-4 w-full">
      {imagePreview && (
        <ImagePreviewComponent
          imagePreview={imagePreview}
          removeImageHandler={() => removeImageHandler(setImagePreview, fileInputRef)}
        />
      )}
      <FormComponent
        onSubmitHandler={sendMessagesHandler}
        formStyling={"flex items-center gap-2"}
      >
        <div className="flex-1 flex gap-2">
          <ChatInput
            inputStyling={
              "w-full input input-bordered rounded-lg input-sm sm:input-md"
            }
            value={text}
            onChangeHandler={(event) => setText(event.target.value)}
          />
          <ImageInput
            ref={fileInputRef}
            onChangeHandler={(event) => handleImageChange(event, setImagePreview)}
          />
          <Button
            btnType="button"
            btnStyle={`hidden sm:flex btn btn-circle
                     ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
            onClickHandler={() => fileInputRef.current?.click()}
            btnIcon={<Image size={20} />}
          />
        </div>
        <Button
          btnType="submit"
          btnStyle={"btn btn-sm btn-cricle"}
          btnDisabled={!text.trim() && !imagePreview}
          btnIcon={<Send size={22} />}
        />
      </FormComponent>
    </div>
  );
}

export default MessageInput;
