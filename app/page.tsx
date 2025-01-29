"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 3,
  });
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="space-y-4">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            <div>
              <div className="font-bold">{m.role}</div>
              <p>
                {m.content.length > 0 ? (
                  m.content
                ) : (
                  <span className="italic font-light">
                    {"calling tool: " + m?.toolInvocations?.[0].toolName}
                  </span>
                )}
              </p>
              <p>{m.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <Textarea
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border  shadow-2xl rounded hover:shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
