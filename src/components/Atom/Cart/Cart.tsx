import React from 'react';
import { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import type { ICartPage } from '@/components/Molecule/CartPage/CartPage';
import { useRandomItem } from './useRandomItem';
import {
    Box,
    Button,
    Card,
    Container,
    Typography,
    Divider
} from '@mui/material';
import { HeaderCartPrice, ProductCounter, VolumePerfumeBox } from './styled';
import CartMobile from './CartMobile';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '@/stores/slices/productsSlice/productsSlice';



// icons
import SupportAgent from '@/components/Icons/SupportAgent';
import NewReleases from '@/components/Icons/NewReleases';
import LocalShipping from '@/components/Icons/LocalShipping';
import WorkspacePremium from './../../Icons/WorkspacePremium';
import DeleteIcon from '@/components/Icons/DeleteIcon';
import Vector from '@/components/Icons/Vector';



const Cart: NextPage<ICartPage> = ({ products, onPayment }) => {

    const state = useSelector((state: any) => state.products);

    const dispatch = useDispatch();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: () =>
            fetch("https://fakestoreapi.com/products").then(res =>
                res.json()
            ),
        initialData: products
    });

    const onSubmitProduct = (cash: string, submit: boolean): void => {
        onPayment?.(cash, submit);
    }


    return (
        <>
            <Container sx={{ m: "30px 0px" }}>
                <Box display={{ md: "none", sm: "none", xs: "block" }}>
                    <CartMobile
                        products={data}
                        onSubmitClicked={(cash: string, submit: boolean) => {
                            onPayment?.(cash, submit)
                        }} />
                </Box>
                <Box
                    display={{ md: "flex", sm: "flex", xs: "none" }}
                    justifyContent={{
                        xs: "center",
                        sm: "space-between",
                        md: "space-between"
                    }}
                    flexWrap="wrap"
                >
                    <Box>
                        <Box display="flex" justifyContent="space-between">
                            <Box>
                                <Box display="flex">
                                    <Typography sx={{ color: "themeColor.dark" }} fontWeight="bold" variant="h6">
                                        سبد خرید شما
                                    </Typography>
                                    <Typography sx={{ m: "3px 30px" }} color="gray" fontWeight="bold" variant="body1">
                                        {data.length} کالا
                                    </Typography>
                                </Box>
                            </Box>
                            <Box onClick={() => alert("delete products")}>
                                <Typography color="error" fontWeight="bold" variant="h6">
                                    خالی کردن سبد خرید
                                </Typography>
                            </Box>
                        </Box>
                        {
                            !isLoading ?
                                (
                                    data.map((product: any, index: number) => {
                                        return (
                                            <>
                                                <Box display="flex" m="10px 0px" key={product.id} >
                                                    <Box display="flex" justifyContent={{ md: "start", sm: "start", xs: "center" }} flexWrap="wrap">
                                                        <Card sx={{
                                                            boxShadow: 0,
                                                            border: "1px solid #CBCECE",
                                                            maxWidth: 200,
                                                            textAlign: "center",
                                                            p: "20px",
                                                            borderRadius: "12px",
                                                        }}
                                                        >
                                                            <Image
                                                                height="213"
                                                                width="213"
                                                                src={product.image}
                                                                alt={`product image ${product.id}`}
                                                            />
                                                        </Card>
                                                    </Box>
                                                    <Box maxWidth="270px" mr="25px" textAlign={{ md: "right", sm: "right", xs: "center" }}>
                                                        <Typography color="CaptionText" fontWeight="bold" variant="h6">
                                                            {product.title}
                                                        </Typography>
                                                        <Typography color="GrayText" fontWeight="bold" variant="h6" sx={{ m: "15px 0px" }}>
                                                            {product.category}
                                                        </Typography>
                                                        <Box
                                                            display="flex"
                                                            m="15px 0px"
                                                            justifyContent={
                                                                {
                                                                    md: "start",
                                                                    sm: "center",
                                                                    xs: "center"
                                                                }
                                                            }>
                                                            <Typography color="GrayText">
                                                                حجم خریداری شده:
                                                            </Typography>
                                                            <VolumePerfumeBox sx={{ margin: "0px 10px", padding: "0px 20px" }}>
                                                                <Typography fontWeight="bold">
                                                                    {product.rating.count} میل
                                                                </Typography>
                                                            </VolumePerfumeBox>
                                                        </Box>
                                                        <Box
                                                            display="flex"
                                                            m="15px 0px"
                                                            justifyContent={
                                                                {
                                                                    md: "start",
                                                                    sm: "center",
                                                                    xs: "center"
                                                                }
                                                            }>
                                                            <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h5">
                                                                {product.price}
                                                            </Typography>
                                                            <Typography sx={{ m: "0px 30px" }} color="GrayText" fontWeight="bold" variant="h6">
                                                                ارسال رایگان
                                                            </Typography>
                                                        </Box>
                                                        <Box display="flex" alignItems="center" m="10px 0px">
                                                            <ProductCounter sx={{
                                                                display: "grid",
                                                                gridTemplateColumns: "repeat(3,auto)",
                                                            }}>
                                                                <Box sx={{ cursor: "pointer" }} onClick={() => dispatch(increase(product.id))}>
                                                                    +
                                                                </Box>
                                                                <Box>
                                                                    1
                                                                </Box>
                                                                <Box sx={{ cursor: "pointer" }}>
                                                                    <DeleteIcon />
                                                                </Box>
                                                            </ProductCounter>
                                                            <Typography
                                                                color="GrayText"
                                                                fontWeight="bold"
                                                                variant="body1"
                                                                sx={{ m: "0px 10px" }}
                                                            >
                                                                حداکثر 3 عدد
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                {
                                                    (index < data.length - 1) ? (
                                                        <Box display="flex" justifyContent={{ md: "start", sm: "center", xs: "center" }} m="20px 0px">
                                                            <Divider sx={
                                                                {
                                                                    width: "90%",
                                                                    bgcolor: "themeColor.navy"
                                                                }
                                                            } />
                                                        </Box>
                                                    )
                                                        :
                                                        ""
                                                }
                                            </>
                                        )
                                    })
                                )
                                :
                                "loading"
                        }
                    </Box>
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
                                        onClick={() => onSubmitProduct("300", true)}
                                    >
                                        <Typography sx={{ color: "themeColor.main" }} m="5px 0px" fontWeight="bold" variant="body1">
                                            تایید سفارشات
                                        </Typography>
                                    </Button>
                                </Box>
                            </Card>
                        </Box>
                        <Box width={{ md: "300px", sm: "300px" }}>
                            <Typography sx={{ color: "themeColor.main" }} m="40px 0px" fontWeight="bold" variant="h6">
                            <span><Vector /></span> ارسال رایگان به تمام کشور
                            </Typography>
                            <Typography color="GrayText" m="40px 0px" fontWeight="bold" variant="h6">
                                هزینه سبد هنوز پرداخت نشده و در صورت اتمام موجودی از سبد حذف خواهد شد.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box display={{ md: "block", sm: "block", xs: "none" }}>
                <Divider sx={{ width: "100%" }} />
                <Box textAlign="center" m="40px 0px">
                    <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h5">
                        چرا هزار و یک عطر؟
                    </Typography>
                    <Typography color="GrayText" mt="20px" fontWeight="bold" variant="h6">
                        با ما تفاوت در خرید را احساس کنید
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Divider />
                    <Box display="grid" gridTemplateColumns="repeat(4,auto)">
                        <Box textAlign="center">
                            <WorkspacePremium />
                            <Typography sx={{ color: "themeColor.main", width: "200px" }} fontWeight="bold" variant="h5">
                                تضمین بالاترین کیفیت محصول موجود
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <LocalShipping />
                            <Typography sx={{ color: "themeColor.main", width: "200px" }} fontWeight="bold" variant="h5">
                                ارسال رایگان به تهران و شهرستان ها
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <NewReleases />
                            <Typography sx={{ color: "themeColor.main", width: "200px" }} fontWeight="bold" variant="h5">
                                پایین ترین نرخ ها نسبت به قیمت واردات
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <SupportAgent />
                            <Typography sx={{ color: "themeColor.main", width: "200px" }} fontWeight="bold" variant="h5">
                                خدمات و مشاوره انلاین عطر
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ width: "100%", m: "50px 0px" }} />
            </Box>
        </>
    )
}

export default Cart;
