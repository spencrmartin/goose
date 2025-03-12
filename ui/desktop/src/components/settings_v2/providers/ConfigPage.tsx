import {ScrollArea} from "../../ui/scroll-area";
import BackButton from "../../ui/BackButton";
import React from "react";
import {useConfig} from "../../ConfigContext";

export function ConfigPage({ onClose }: { onClose: () => void }) {
    const { config } = useConfig();

    return (
        <div className="h-screen w-full">
            <div className="relative flex items-center h-[36px] w-full bg-bgSubtle"></div>

            <ScrollArea className="h-full w-full">
                <div className="px-8 pt-6 pb-4">
                    <BackButton onClick={onClose} />
                    <h1 className="text-3xl font-medium text-textStandard mt-1">Configure</h1>
                </div>

                <div className="py-8 pt-[20px]">
                    <div className="flex justify-between items-center mb-6 border-b border-borderSubtle px-8">
                        <h2 className="text-xl font-medium text-textStandard">Providers</h2>
                    </div>

                    {/* Content Area */}
                    <div className="max-w-5xl pt-4 px-8">
                        <div className="relative z-10">
                            {/* Convert config object to JSON string for display */}
                            <pre className="bg-gray-100 p-4 rounded overflow-auto">
                                {JSON.stringify(config, null, 2)}
                            </pre>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
