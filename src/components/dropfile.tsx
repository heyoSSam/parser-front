import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import axios from "axios";

interface DropfileProps {
    format: string;
}

export default function FileDropZone({ format }: DropfileProps) {
    const [file, setFile] = useState<File | null>(null); 

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const uploadedFile = e.dataTransfer.files[0];
        if (uploadedFile) setFile(uploadedFile);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (uploadedFile) setFile(uploadedFile);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

    const openFileExplorer = () => {
        const fileInput = document.getElementById("file-upload") as HTMLInputElement;
        fileInput.click();
    };

    const handleUpload = async () => {
        if (!format) {
            alert("Please select a format first!");
            return;
        }

        const API_URL = format === "CSV"
            ? import.meta.env.VITE_API_URL_CSV
            : import.meta.env.VITE_API_URL_SQL;

        if (!file) {
            alert("Please add a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(API_URL, formData, {
                responseType: 'blob', 
            });

            const contentDisposition = response.headers['content-disposition'];
            const filename = contentDisposition
                ? contentDisposition.split('filename=')[1].replace(/["']/g, "")
                : file.name;

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename); 
            document.body.appendChild(link);
            link.click();
            link.remove();

            window.location.reload();
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload file.");
        }
    };

    return (
        <Card className="p-6 w-full max-w-md mx-auto">
            <CardContent
                className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <UploadCloud className="mx-auto mb-2 w-10 h-10 text-black-500" />
                <p className="text-sm text-gray-500">Drag & drop a file here or click below to upload</p>
                <input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                />
                <label htmlFor="file-upload">
                    <Button className="mt-4" onClick={openFileExplorer}>Select File</Button>
                </label>
            </CardContent>

            {file && (
                <div className="mt-4 text-sm text-gray-700">
                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </div>
            )}

            <div className="my-3">
                <Button onClick={handleUpload} className="w-full">Parse</Button>
            </div>
        </Card>
    );
}
