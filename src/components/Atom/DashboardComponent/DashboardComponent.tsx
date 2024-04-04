"use client"
import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import type { IDashboard } from "@/components/Molecule/DashboardPage/DashboardPage";
import { Avatar,
         Box,
         Card,
         Container,
         Divider,
         Typography
        } from "@mui/material";
import { CustomerClub, HeaderCard, SuccesAlertBox } from "./styled";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";



// logos
import Ellipse from "@/components/Icons/Ellipse";
import EllipseActive from "@/components/Icons/EllipseActive";
import Logout from "@/components/Icons/Logout";


const DashboardComponent: NextPage<IDashboard> = ({ data }) => {



    return (
        <>
            <Container>
                <Box
                    display="grid"
                    gridTemplateColumns={
                        {
                            md: "repeat(3,auto)",
                            sm: "repeat(1,auto)",
                            xs: "repeat(1,auto)"
                        }
                    }
                    my={5}
                >
                    <Box display="flex" justifyContent="center">
                        <Card sx={{ width: "270px", borderRadius: "24px" }}>
                            <HeaderCard>
                                <Typography fontWeight="bold" variant="h6">
                                    داشبورد ادمین
                                </Typography>
                            </HeaderCard>
                            <Box display="flex" justifyContent="space-between" px={5} pt={5}>
                                <Box>
                                    <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="body1">
                                        محمد پارسا محلوجی
                                    </Typography>
                                    <Typography color="GrayText" variant="body2">
                                        عضویت: ۱۶ تیرماه ۱۴۰۲
                                    </Typography>
                                    <Box onClick={() => alert("exit")} display="flex" sx={{ cursor: "pointer" }} my={5}>
                                        <span style={{ margin: "0px 1px" }}><Logout /></span>
                                        <Typography color="error" fontWeight="bold" variant="body2">
                                            خروج از حساب
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box mr={5}>
                                        <Avatar src="../../../../public/images/account_circle.png" />
                                    </Box>
                                    <Box onClick={() => alert("user details")} display="flex" sx={{ cursor: "pointer" }} my={6.5}>
                                        <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="body2">
                                            اطلاعات کاربری
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box m={5}>
                                <Divider />
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <CustomerClub sx={{ p: "10px", display:"flex" }}>
                                    <Image
                                    width={70}
                                    height={60}
                                    src="../../../../public/logos/1001 perfume Png 1.png"
                                    alt="logo"
                                    />
                                    <Typography sx={{ width: "50px", mr: "20px" }}>
                                        باشگاه مشتریان
                                    </Typography>
                                </CustomerClub>
                            </Box>
                            <Box display="grid" gridTemplateColumns="repeat(3,auto)" mr={7} my={5}>
                                <Box display="flex">
                                    <Box mt="24px">
                                        <Ellipse />
                                    </Box>
                                    <Divider sx={
                                        {
                                            width: "100px",
                                            borderStyle: "dashed",
                                            marginBottom: "10px",
                                            marginLeft: "-28px"
                                        }
                                    } />
                                </Box>
                                <Box ml={10}>
                                    <Typography>
                                        سطح دو
                                    </Typography>
                                    <span style={{marginRight:"10px"}}>
                                    <EllipseActive/>
                                    </span>
                                    {
                                        // active or deactive
                                    }
                                    {
                                        // <Divider sx={
                                        //     {
                                        //     width:"40px",
                                        //     borderStyle:"dashed",
                                        //     marginBottom:"10px",
                                        //     marginLeft:"-30px"
                                        // }
                                        //     }/>
                                    }
                                </Box>
                                <Box display="flex">
                                    <Typography>
                                        سطح سه
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                    <Box display="flex" justifyContent="center" my={8}>
                        <Box display="flex" justifyContent="center">
                            <Card sx={{ width: "400px", borderRadius: "24px" }}>
                                <HeaderCard>
                                    <Typography fontWeight="bold" variant="h6">
                                        کدهای تخفیف
                                    </Typography>
                                </HeaderCard>
                                <Box display="grid" gridTemplateColumns="repeat(3,auto)" my={8}>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="body2">
                                            35% ویژه اولین خرید:
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="body1">
                                            Firstbuy2344
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <SuccesAlertBox sx={{ display: "flex", justifyContent: "space-around", p: "5px" }}>
                                            <Box mx={3}>
                                                svg
                                            </Box>
                                            <Box>
                                                <Typography color="succes">
                                                    ۶۵:۱۲:۴۴
                                                </Typography>
                                            </Box>
                                        </SuccesAlertBox>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>

                    </Box>
                    <Box display="flex" justifyContent="center">

                        <Box display="flex" justifyContent="center">
                            <Card sx={{ width: "240px", height: "280px", borderRadius: "24px" }}>
                                <HeaderCard>
                                    <Typography fontWeight="bold" variant="h6">
                                        مورد علاقه ها
                                    </Typography>
                                </HeaderCard>

                                <Box display="flex" justifyContent="center" textAlign="center" mt={4}>
                                    <Swiper
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                    >
                                        {
                                            data.map((item: any) => {
                                                return (
                                                    <>
                                                        <SwiperSlide key={item.id}>
                                                            <Image src={item.image} alt={`${item.id}`} width={80} height={80} />
                                                            <Typography fontWeight="bold" variant="body2">
                                                                {item.title}
                                                            </Typography>
                                                        </SwiperSlide>
                                                    </>
                                                )
                                            })
                                        }
                                    </Swiper>

                                </Box>
                                <Box textAlign="center" onClick={() => alert("push all items")} sx={{ cursor: "pointer" }}>
                                    <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                        مشاهده همه
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                </Box>
                <Box display="grid" gridTemplateColumns={{ md: "repeat(2,auto)", sm: "repeat(1,auto)", xs: "repeat(1,auto)" }}>
                    <Box display="flex" mr={7} mt={5} justifyContent="center">
                        <Card sx={{ width: "270px", borderRadius: "24px", height: "320px" }}>
                            <HeaderCard>
                                <Typography fontWeight="bold" variant="h6">
                                    عطر امضا شما
                                </Typography>
                            </HeaderCard>
                            <Box display="flex" justifyContent="center" mt={5} mb={2}>
                                <Card sx={{
                                    boxShadow: 0,
                                    border: "1px solid #CBCECE",
                                    maxWidth: 100,
                                    textAlign: "center",
                                    p: "20px",
                                    borderRadius: "12px",
                                }}
                                >
                                    <Image
                                        height={80}
                                        width={80}
                                        src={data[0].image}
                                        alt={`product image ${data[0].id}`}
                                    />
                                </Card>
                            </Box>
                            <Box textAlign="center" my={3}>
                                <Typography fontWeight="bold" variant="body1">
                                    {
                                        data[0].title
                                    }
                                </Typography>
                            </Box>
                            <Box textAlign="center" my={2}>
                                <Typography color="GrayText" fontWeight="bold" variant="body2" sx={{ m: "15px 0px" }}>
                                    {data[0].category}
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    {
                        // md screen
                        <Box display={{ md: "flex", sm: "none", xs: "none" }} sx={{ width: "850px" }} mt={5} justifyContent="center">
                            <Card sx={{ width: "100%", borderRadius: "24px" }}>
                                <HeaderCard>
                                    <Typography fontWeight="bold" variant="h6">
                                        سفارشات
                                    </Typography>
                                </HeaderCard>
                                <Box sx={{ overflowY: "scroll", height: "400px" }}>
                                    {
                                        data.map((item: any) => {
                                            return (
                                                <>
                                                    <Box display="flex" justifyContent="space-between" key={item.id}>
                                                        <Box display="flex" m="20px" alignItems="center">
                                                            <Box alignItems="center">
                                                                <Typography fontWeight="bold" variant="h6" sx={{ color: "themeColor.main" }}>
                                                                    {data.length} محصول
                                                                </Typography>
                                                            </Box>
                                                            <Box mr={10} alignItems="center">
                                                                <Typography fontWeight="bold" variant="h6" sx={{ color: "themeColor.main" }}>
                                                                    کد رهگیری:  ۲۴۱۱۲۳۴۵۳۳۴۵۵
                                                                </Typography>
                                                            </Box>
                                                            <Box mr={10} mt={1}>
                                                                <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                                    ۱۲ اسفند ۱۴۰۲
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box m="20px" display="flex" alignItems="center">
                                                            <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                                وضعیت سفارش:
                                                            </Typography>
                                                            <Box mr={3}>
                                                                {
                                                                    // needs status from api,
                                                                    <SuccesAlertBox sx={{ p: "10px" }}>
                                                                        ارسال شده
                                                                    </SuccesAlertBox>
                                                                }
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" justifyContent="space-between">
                                                        <Box display="flex" m="20px" alignItems="center">
                                                            <Box alignItems="center">
                                                                <Image
                                                                    height={70}
                                                                    width={70}
                                                                    src={data[0].image}
                                                                    alt={`product image ${data[0].id}`}
                                                                />
                                                            </Box>
                                                            <Box mr={9} alignItems="center">
                                                                <Typography fontWeight="bold" variant="body1" >
                                                                    بلو شنل پرمیوم ادیشن اورجینال
                                                                </Typography>
                                                                <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                                    ۱۹٬۳۴۰٬۰۰ تومان
                                                                </Typography>
                                                            </Box>
                                                            <Box alignItems="center" mr={5}>
                                                                <Image
                                                                    height={70}
                                                                    width={70}
                                                                    src={data[0].image}
                                                                    alt={`product image ${data[0].id}`}
                                                                />
                                                            </Box>
                                                            <Box mr={9} alignItems="center">
                                                                <Typography fontWeight="bold" variant="body1" >
                                                                    بلو شنل پرمیوم ادیشن اورجینال
                                                                </Typography>
                                                                <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                                    ۱۹٬۳۴۰٬۰۰ تومان
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box my="30px" alignItems="center" ml="60px">
                                                            <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                                قیمت تمام شده:
                                                            </Typography>
                                                            <Typography fontWeight="bold" variant="h6" sx={{ color: "themeColor.secendary" }}>
                                                                ۵۴٬۰۰۰٬۰۰۰ تومان
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </>
                                            )
                                        })
                                    }
                                </Box>
                            </Card>
                        </Box>
                    }
                    {
                        // sm and xs screen

                        <Box display={{ md: "none", sm: "flex", xs: "flex" }} mt={5} justifyContent="center">
                            <Card sx={{ borderRadius: "24px", width: "300px" }}>
                                <HeaderCard>
                                    <Typography fontWeight="bold" variant="h6">
                                        سفارشات
                                    </Typography>
                                </HeaderCard>
                                <Box sx={{ overflowY: "scroll", height: "400px" }}>
                                    {
                                        data.map((item: any) => {
                                            return (
                                                <>
                                                    <Box display="flex" justifyContent="space-around" alignItems="center">
                                                        <Box>
                                                            <Typography fontWeight="bold" variant="h6" sx={{ color: "themeColor.main" }}>
                                                                {data.length} محصول
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                                ۱۲ اسفند ۱۴۰۲
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" justifyContent="space-around" alignItems="center" my={3}>
                                                        <Box>
                                                            <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                                وضعیت سفارش:
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            {
                                                                // needs status from api,
                                                                <SuccesAlertBox sx={{ p: "10px" }}>
                                                                    ارسال شده
                                                                </SuccesAlertBox>
                                                            }
                                                        </Box>
                                                    </Box>
                                                    <Box textAlign="center">
                                                        <Typography fontWeight="bold" variant="h6" sx={{ color: "themeColor.main" }}>
                                                            کد رهگیری:  ۲۴۱۱۲۳۴۵۳۳۴۵۵
                                                        </Typography>
                                                    </Box>
                                                    <Box display="flex" m="20px" alignItems="center">
                                                        <Box alignItems="center">
                                                            <Image
                                                                height={70}
                                                                width={70}
                                                                src={data[0].image}
                                                                alt={`product image ${data[0].id}`}
                                                            />
                                                        </Box>
                                                        <Box mr={5} alignItems="center">
                                                            <Typography fontWeight="bold" variant="body1" >
                                                                بلو شنل پرمیوم ادیشن اورجینال
                                                            </Typography>
                                                            <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                                ۱۹٬۳۴۰٬۰۰ تومان
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" m="20px" alignItems="center">
                                                        <Box alignItems="center">
                                                            <Image
                                                                height={70}
                                                                width={70}
                                                                src={data[0].image}
                                                                alt={`product image ${data[0].id}`}
                                                            />
                                                        </Box>
                                                        <Box mr={5} alignItems="center">
                                                            <Typography fontWeight="bold" variant="body1" >
                                                                بلو شنل پرمیوم ادیشن اورجینال
                                                            </Typography>
                                                            <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                                ۱۹٬۳۴۰٬۰۰ تومان
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box mr={5}>
                                                        <Typography fontWeight="bold" variant="body1" sx={{ color: "themeColor.main" }}>
                                                            قیمت تمام شده:
                                                        </Typography>
                                                        <Typography fontWeight="bold" variant="h6" sx={{ color: "themeColor.secendary" }}>
                                                            ۵۴٬۰۰۰٬۰۰۰ تومان
                                                        </Typography>
                                                    </Box>
                                                    <Divider sx={{ m: "20px" }} />
                                                </>
                                            )
                                        })
                                    }
                                </Box>
                            </Card>
                        </Box>
                    }
                </Box>
            </Container>
        </>
    )
}

export default DashboardComponent;