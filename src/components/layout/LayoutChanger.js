import React, {useState} from "react";
import {TextField, Container, Box, useTheme, styled, Grid2} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';

const AnimatedTextField = styled(({ inFocus, ...other }) => (
    <TextField {...other} />
))(({ theme, inFocus }) => ({
    bgcolor: "#1C1C1C",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderWidth: inFocus ? "medium": "none",
            borderImage: "linear-gradient(90deg, #F0944F, #FF69B4) 2",
            boxShadow: inFocus ? "0 0 15px rgba(240, 148, 79, 0.8), 0 0 30px rgba(255, 105, 180, 0.6)" : "none",
        },
    },
}));

const qwertyToYcuken = (text) => {
    const mapping = {
        q: "й", w: "ц", e: "у", r: "к", t: "е", y: "н", u: "г", i: "ш", o: "щ", p: "з",
        "[": "х", "]": "ї", a: "ф", s: "і", d: "в", f: "а", g: "п", h: "р", j: "о",
        k: "л", l: "д", ";": "ж", "'": "є", z: "я", x: "ч", c: "с", v: "м", b: "и",
        n: "т", m: "ь", ",": "б", ".": "ю",
        "@": '"', "#": "№", "$": ";", "^": ":", "&": "?", "/": ".", "?": ","
    };

    return text.split("").map((char) => {
        const lowerChar = char.toLowerCase();
        const mappedChar = mapping[lowerChar] || lowerChar;
        return char === lowerChar ? mappedChar : mappedChar.toUpperCase();
    }).join("");
};

const ycukenToQwerty = (text) => {
    const mapping = {
        й: "q", ц: "w", у: "e", к: "r", е: "t", н: "y", г: "u", ш: "i", щ: "o", з: "p",
        х: "[", ї: "]", ф: "a", і: "s", в: "d", а: "f", п: "g", р: "h", о: "j", л: "k",
        д: "l", ж: ";", є: "'", я: "z", ч: "x", с: "c", м: "v", и: "b", т: "n", ь: "m",
        б: ",", ю: ".", "№": "#", ";": "$", ":": "^", "?": "&", '"': "@", ".": "/", ",": "?"
    };

    return text.split("").map((char) => {
        const lowerChar = char.toLowerCase();
        const mappedChar = mapping[lowerChar] || lowerChar;
        return char === lowerChar ? mappedChar : mappedChar.toUpperCase();
    }).join("");
};

const LayoutChanger = () => {
    const theme = useTheme();
    const [englishText, setEnglishText] = useState("");
    const [ukrainianText, setUkrainianText] = useState("");
    const [showCopiedMessageEnglish, setShowCopiedMessageEnglish] = useState(false);
    const [showCopiedMessageUkrainian, setShowCopiedMessageUkrainian] = useState(false);
    const [focusField, setFocusField] = useState({english: false, ukrainian: false});


    const copyToClipboard = (text, setMessage) => {
        navigator.clipboard.writeText(text).then(() => {
            setMessage(true);
            setTimeout(() => setMessage(false), 1500);
        });
    };

    const handleEnglishChange = (event) => {
        const value = event.target.value;
        setEnglishText(value);
        setUkrainianText(qwertyToYcuken(value));
    };

    const handleUkrainianChange = (event) => {
        const value = event.target.value;
        setUkrainianText(value);
        setEnglishText(ycukenToQwerty(value));
    };

    return (
        <Container sx={{marginTop: "2rem", color: "#ffffff"}}>
            <Grid2 container spacing={6} justifyContent="center" alignItems="center">
                <Grid2 item size={{xs: 12, md: 6}}>
                    <AnimatedTextField
                        label="Текст Англійською"
                        variant="outlined"
                        multiline
                        fullWidth
                        rows={8}
                        value={englishText}
                        onChange={handleEnglishChange}
                        onFocus={() => setFocusField((prev) => ({...prev, english: true}))}
                        onBlur={() => setFocusField((prev) => ({...prev, english: false}))}
                        inFocus={focusField.english}
                        slotProps={{
                            inputLabel: {
                                style: {color: "#ffffff"}
                            },
                            input: {
                                endAdornment: (
                                    <Box position="relative">
                                        <IconButton
                                            onClick={() => copyToClipboard(englishText, setShowCopiedMessageEnglish)}>
                                            <ContentCopyIcon style={{color: "#ffffff"}}/>
                                        </IconButton>
                                        {showCopiedMessageEnglish && (
                                            <Box sx={{
                                                position: 'absolute',
                                                top: '-35px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: theme.palette.grey[700],
                                                color: theme.palette.common.white,
                                                borderRadius: '4px',
                                                padding: '4px 8px',
                                                fontSize: '0.75rem',
                                                whiteSpace: 'nowrap',
                                                zIndex: 10
                                            }}>
                                                Copied to clipboard!
                                            </Box>
                                        )}
                                    </Box>
                                ),
                                style: {color: "#ffffff"}
                            }
                        }}
                    />
                </Grid2>
                <Grid2 item size={{xs: 12, md: 6}}>
                    <AnimatedTextField
                        label="Текст Українською"
                        variant="outlined"
                        multiline
                        fullWidth
                        rows={8}
                        value={ukrainianText}
                        onChange={handleUkrainianChange}
                        onFocus={() => setFocusField((prev) => ({...prev, ukrainian: true}))}
                        onBlur={() => setFocusField((prev) => ({...prev, ukrainian: false}))}
                        inFocus={focusField.ukrainian}
                        slotProps={{
                            inputLabel: {
                                style: {color: "#ffffff"}
                            },
                            input: {
                                endAdornment: (
                                    <Box position="relative">
                                        <IconButton
                                            onClick={() => copyToClipboard(ukrainianText, setShowCopiedMessageUkrainian)}>
                                            <ContentCopyIcon style={{color: "#ffffff"}}/>
                                        </IconButton>
                                        {showCopiedMessageUkrainian && (
                                            <Box sx={{
                                                position: 'absolute',
                                                top: '-35px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: theme.palette.grey[700],
                                                color: theme.palette.common.white,
                                                borderRadius: '4px',
                                                padding: '4px 8px',
                                                fontSize: '0.75rem',
                                                whiteSpace: 'nowrap',
                                                zIndex: 10
                                            }}>
                                                Copied to clipboard!
                                            </Box>
                                        )}
                                    </Box>
                                ),
                                style: {color: "#ffffff"}
                            }
                        }}
                    />
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default LayoutChanger;
