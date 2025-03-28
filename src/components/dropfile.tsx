import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface DropfileProps {
    format: string;
    docno: string;
}

export default function Dropfile({ format, docno }: DropfileProps) {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!format || !docno) {
            alert("Please select a document and format first!");
            return;
        }

        const API_URL = format === "CSV" 
            ? import.meta.env.VITE_API_URL_CSV 
            : import.meta.env.VITE_API_URL_SQL;

        try {
            setLoading(true);
            const response = await axios.post(API_URL, { docno: docno }, { responseType: "blob" });

            const contentDisposition = response.headers["content-disposition"];
            const filename = contentDisposition
                ? contentDisposition.split("filename=")[1].replace(/["']/g, "")
                : "output.sql";

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
            alert("Файл может быть неточным. Проверьте его вручную.");
            window.location.reload();
        } catch (error) {
            console.error("Error generating file:", error);
            alert("Failed to generate file.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="p-6 w-full max-w-md mx-auto">
            <CardContent className="text-center">
                <p className="text-sm text-gray-500">Selected Document ID: {docno}</p>
                <p className="text-sm text-gray-500">Selected Format: {format}</p>
                <div className="my-3">
                    <Button onClick={handleSubmit} className="w-full" disabled={loading}>
                        {loading ? "Processing..." : "Создать"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
