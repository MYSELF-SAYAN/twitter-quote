"use client";
import React, { use, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useAppContext } from "@/context";

interface AppState {
  name: string;
  username: string;
  thoughts: string;
  hashtags: string[];
  theme: string;
  image: string;
}

const Controls: React.FC = () => {
  const { state, setState } = useAppContext();
  const [name, setName] = useState<string>(state.name);
  const [username, setUsername] = useState<string>(state.username);
  const [thoughts, setThoughts] = useState<string>(state.thoughts);
  const [hashtags, setHashtags] = useState<string[]>(state.hashtags);
  const [theme, setTheme] = useState<string>(state.theme);
  const [tagInput, setTagInput] = useState<string>(state.hashtags.join(","));
  const [upload, setUpload] = useState<File>();
  const [image, setImage] = useState<string>(state.image);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setUpload(selectedFile);
    }
  };
  useEffect(() => {
    const newState: AppState = {
      name: name,
      username: username,
      thoughts: thoughts,
      hashtags: hashtags,
      theme: theme,
      image: image,
    };
    setState(newState);
    // console.log(theme);
  }, [name, username, thoughts, hashtags, theme, setState,image]);

  useEffect(() => {
    const getAndConvertImageToURL = async (file: File) => {
      const blob = new Blob([file], { type: "image/jpeg" });
      const blobToURL = URL.createObjectURL(blob);
      console.log(blobToURL);

      setImage(blobToURL);
    };
    if (upload) {
      getAndConvertImageToURL(upload);
    }
  }, [upload]);
  useEffect(() => {
    setHashtags(
      tagInput
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "")
    );
  }, [tagInput]);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Customize your card</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-2">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              className="h-8 sm:max-w-full max-w-[80%]"
              id="name"
              value={name}
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              className="h-8 sm:max-w-full max-w-[80%]"
              value={username}
              placeholder="Enter your desired username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="thoughts">Thoughts</Label>
            <Input
              id="thoughts"
              className="h-8 sm:max-w-full max-w-[80%]"
              value={thoughts}
              placeholder="Enter your thoughts here"
              onChange={(e) => setThoughts(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="hashtags">Hashtags</Label>
            <div className="flex">
              <Input
                id="hashtags"
                className="h-8 sm:max-w-full max-w-[80%]"
                value={tagInput}
                placeholder="Enter hashtags seperated by commas"
                onChange={(e) => {
                  setTagInput(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Upload image</Label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="theme">Theme</Label>
            <Select
              onValueChange={(e) => {
                setTheme(e);
              }}
             
            >
              <SelectTrigger id="theme" className="sm:max-w-full max-w-[80%]">
                <SelectValue placeholder={theme} />
              </SelectTrigger>
              <SelectContent position="popper" className="bg-black text-white">
                <SelectItem
                  value="Dark"
                  onClick={() => setTheme("dark")}
                  className="border-b-2 border-gray-800"
                >
                  Dark
                </SelectItem>
                <SelectItem value="Light" onClick={() => setTheme("light")}>
                  Light
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Controls;
