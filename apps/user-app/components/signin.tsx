"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { authSchema, authSchemaType } from "@repo/validation/zod-schema";
import { signIn } from "next-auth/react"

export default function Signin() {
    const router = useRouter()
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<authSchemaType>({
        resolver: zodResolver(authSchema),
        defaultValues: {
            phone: "",
            password: "",
        },
    })

    async function onSubmit(values: authSchemaType) {
        setIsLoading(true)
        try {
            const res = await signIn('credentials', {
                phone: values?.phone,
                password: values?.password,
                redirect: false,
            })
            setIsLoading(false);
            if (res?.error) {
                toast({
                    title: "Error",
                    description: res?.error || "Failed to sign in, try again",
                })
            }
            else {
                toast({
                    title: "Response",
                    description: "Signed in successfully",
                })
                setTimeout(() => {
                    setIsLoading(false)
                    router.push("/");
                }, 2000)
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to sign in, try again",
            })
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md bg-gray-200 border-none">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-purple-600">Sign in to WorkStream</CardTitle>
                    <CardDescription className="text-center text-slate-800">
                        Enter your credentials to sign in
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input className="bg-gray-300 border-none placeholder:text-slate-800"
                                                type="text" placeholder="1234567890" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-gray-300 border-none placeholder:text-slate-800"
                                                type="password" placeholder="********" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-purple-600" disabled={isLoading}>
                                {isLoading ? "Signing in..." : "Sign in"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}