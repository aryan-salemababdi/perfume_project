/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { ICartPage } from '@/components/Molecule/CartPage/CartPage';
import {
    Box,
    Button,
    Card,
    Divider,
    Typography
} from '@mui/material';
import {
    VolumePerfumeBox,
    OfferBox,
    ProductCounter,
    HeaderCartPrice
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import {
    increase,
    decrease,
    addItem,
    removeItem
} from '@/stores/slices/productsSlice/productsSlice';

// icons
import SupportAgent from '@/components/Icons/SupportAgent';
import NewReleases from '@/components/Icons/NewReleases';
import LocalShipping from '@/components/Icons/LocalShipping';
import WorkspacePremium from '@/components/Icons/WorkspacePremium';
import DeleteIcon from '@/components/Icons/DeleteIcon';
import Women from '@/components/Icons/Women';
import Men from '@/components/Icons/Men';

const CartMobile: NextPage<ICartPage> = ({ products, onSubmitClicked }) => {
    const state = useSelector((state: any) => state.products);
    const dispatch = useDispatch();
    const [offer, setOffer] = useState<boolean>(true);

    return (
        <>
            <Box>
                <Typography sx={{ color: "themeColor.dark" }} fontWeight="bold" variant="h5">
                    سبد خرید شما
                </Typography>
                <Typography color="gray" fontWeight="bold" variant="h6">
                    {products.length} کالا
                </Typography>
            </Box>
            {products.map((product: any) => (
                <Box display="flex" justifyContent="center" >
                    <Box
                        bgcolor="themeColor.light"
                        width="650px"
                        borderRadius="12px"
                        key={product.id}
                        mb={2}
                    >
                        <Box display="flex">
                            <Card sx={{
                                boxShadow: 0,
                                border: "1px solid #CBCECE",
                                width: 146,
                                height: "fit-content",
                                m: "5px",
                                p: "5px",
                                borderRadius: "12px",
                            }}
                            >
                                <Box display="flex" >
                                    {offer && (
                                        <Box>
                                            <OfferBox sx={{ m: "2px 0px" }}>
                                                <Typography fontWeight="bold" variant="caption">
                                                    23%
                                                </Typography>
                                            </OfferBox>
                                        </Box>
                                    )}
                                </Box>
                                <Box textAlign="center" mt="-29px">
                                    <span>
                                        <Women />
                                        <Men />
                                    </span>
                                </Box>
                                <Box textAlign="center" m="10px 0px">
                                    <Image
                                        height={80}
                                        width={80}
                                        src={product.image}
                                        alt={`product image ${product.id}`}
                                    />
                                </Box>
                                <Box textAlign="center">
                                    <Divider sx={{ m: "10px" }} />
                                    <Typography fontWeight="bold" variant="h6" color="themeColor.main">
                                        شیرین و نباتی
                                    </Typography>
                                </Box>
                            </Card>
                            <Box maxWidth="250px" mr="25px" textAlign="right">
                                <Typography color="CaptionText" fontWeight="bold" variant="h6">
                                    بلو شنل پرمیوم ادیشن اورجینال
                                </Typography>
                                <Typography color="GrayText" fontWeight="bold" variant="h6" sx={{ m: "15px 0px" }}>
                                    {product.category}
                                </Typography>
                                <Box
                                    display="flex"
                                    m="15px 0px"
                                    justifyContent="start">
                                    <VolumePerfumeBox sx={{ padding: "0px 20px" }}>
                                        <Typography fontWeight="bold">
                                            {product.rating.count} میل
                                        </Typography>
                                    </VolumePerfumeBox>
                                </Box>
                                {offer && (
                                    <Box>
                                        <Typography fontWeight="bold" color="error" variant="h6">
                                            ۱۶٫۰۰۰٫۰۰۰    <span>2 روز دیگر</span>
                                        </Typography>
                                    </Box>
                                )}
                                <Box
                                    display="flex"
                                    m="15px 0px"
                                    justifyContent="start">
                                    <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h5">
                                        {product.price} تومان
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center" m="10px 0px">
                            <ProductCounter sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3,auto)",
                            }}>
                                <Box sx={{ cursor: "pointer" }} onClick={() => dispatch(increase(product))}>
                                    +
                                </Box>
                                <Box>
                                    1
                                </Box>
                                <Box sx={{ cursor: "pointer" }}>
                                    <DeleteIcon />
                                </Box>
                            </ProductCounter>
                        </Box>
                        <Box display="flex" justifyContent="center" m="15px 0px">
                            <Typography color="GrayText" fontWeight="bold" variant="body1">
                                حداکثر 3 عدد
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
            <Box textAlign="center">
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: "300px", boxShadow: 5 }}>
                        <HeaderCartPrice>
                            <Typography fontWeight="bold" variant="h6">
                                فاکتور شما
                            </Typography>
                        </HeaderCartPrice>
                        <Box textAlign="center" m="20px">
                            <Box>
                                <Typography color="GrayText">
                                    مجموع تخفیف:
                                </Typography>
                                <Typography color="error" m="5px 0px" fontWeight="bold" variant="h6">
                                    1/000/000 تومان
                                </Typography>
                            </Box>
                            <Box marginTop="40px" marginBottom="20px">
                                <Typography color="GrayText">
                                    مبلغ قابل پرداخت:
                                </Typography>
                                <Typography sx={{ color: "themeColor.main" }} m="5px 0px" fontWeight="bold" variant="h5">
                                    12/000/000 تومان
                                </Typography>
                            </Box>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "themeColor.Primarhy",
                                    ":hover": { bgcolor: "themeColor.Primarhy" }
                                }}
                                fullWidth
                                onClick={() => onSubmitClicked?.("300", true)}
                            >
                                <Typography sx={{ color: "themeColor.main" }} m="5px 0px" fontWeight="bold" variant="body1">
                                    تایید سفارشات
                                </Typography>
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Box>
            <Box textAlign="center" m="40px 0px">
                <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h5">
                    چرا هزار و یک عطر؟
                </Typography>
                <Typography color="GrayText" mt="20px" fontWeight="bold" variant="h6">
                    با ما تفاوت در خرید را احساس کنید
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-around">
                <Box textAlign="center">
                    <WorkspacePremium />
                    <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h5">
                        تضمین بالاترین کیفیت محصول موجود
                    </Typography>
                </Box>
                <Box textAlign="center">
                    <LocalShipping />
                    <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h5">
                        ارسال رایگان به تهران و شهرستان ها
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-around" m="30px 0px">
                <Box textAlign="center">
                    <NewReleases />
                    <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h5">
                        پایین ترین نرخ ها نسبت به قیمت واردات
                    </Typography>
                </Box>
                <Box textAlign="center">
                    <SupportAgent />
                    <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h5">
                        خدمات و مشاوره انلاین عطر
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default CartMobile;
