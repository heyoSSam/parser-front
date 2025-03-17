import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

interface FileItem {
    name: string;
    size: number;
}

export default function FileDropZone() {
    const [files, setFiles] = useState<FileItem[]>([]);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const uploadedFiles = Array.from(e.dataTransfer.files).map(file => ({ name: file.name, size: file.size }));
        setFiles((prev) => [...prev, ...uploadedFiles]);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = Array.from(e.target.files || []).map(file => ({ name: file.name, size: file.size }));
        setFiles((prev) => [...prev, ...uploadedFiles]);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

    const openFileExplorer = () => {
        const fileInput = document.getElementById("file-upload") as HTMLInputElement;
        fileInput.click(); 
    };

    return (
        <Card className="p-6 w-full max-w-md mx-auto">
            <CardContent
                className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <UploadCloud className="mx-auto mb-2 w-10 h-10 text-black-500" />
                <p className="text-sm text-gray-500">Drag & drop files here or click below to upload</p>
                <input
                    type="file"
                    multiple
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                />
                <label htmlFor="file-upload">
                    <Button className="mt-4" onClick={openFileExplorer}>Select Files</Button>
                </label>
            </CardContent>

            {files.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {files.map((file, index) => (
                        <li key={index} className="text-sm text-gray-700">
                            {file.name} ({(file.size / 1024).toFixed(2)} KB)
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
}
