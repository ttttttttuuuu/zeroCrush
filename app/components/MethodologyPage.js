"use client";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from "@mui/material";
import { ExpandMore, Science, MenuBook, Calculate } from "@mui/icons-material";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/config/translations";

export default function MethodologyPage() {
  const { currentLang } = useLanguage();
  const t = (key) => getTranslation(currentLang, key);

  return (
    <Container maxWidth="lg" sx={{ py: 12, mt: 8 }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Science sx={{ fontSize: 60, color: "#34A853", mb: 2 }} />
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            background: "linear-gradient(135deg, #34A853 0%, #4CC38A 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          {t("methodology.title")}
        </Typography>
      </Box>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">
            <Calculate sx={{ mr: 1, verticalAlign: "middle" }} />
            {t("methodology.standards")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            我们的碳排放计算方法基于以下国际标准：
          </Typography>
          <ul>
            <li>ISO 14064-1:2018 温室气体核算与报告标准</li>
            <li>GHG Protocol（温室气体核算体系）企业核算与报告标准</li>
            <li>IPCC 国家温室气体清单指南</li>
          </ul>

          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            计算公式：
          </Typography>
          <Box
            sx={{
              p: 3,
              bgcolor: "background.paper",
              borderRadius: 1,
              fontFamily: "monospace",
              fontSize: "1.1rem",
              mb: 2,
            }}
          >
            E = Σ(AD × EF × GWP)
          </Box>
          <Typography>其中：</Typography>
          <ul>
            <li>E = 温室气体排放量（tCO2e）</li>
            <li>AD = 活动数据（如能源消耗量）</li>
            <li>EF = 排放因子</li>
            <li>GWP = 全球变暖潜势值</li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">
            <Science sx={{ mr: 1, verticalAlign: "middle" }} />
            {t("methodology.emissionFactors")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>排放源类型</TableCell>
                  <TableCell>排放因子</TableCell>
                  <TableCell>单位</TableCell>
                  <TableCell>数据来源</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>电力消耗</TableCell>
                  <TableCell>0.5810</TableCell>
                  <TableCell>kgCO2e/kWh</TableCell>
                  <TableCell>国家发改委气候司</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>天然气燃烧</TableCell>
                  <TableCell>2.1622</TableCell>
                  <TableCell>kgCO2e/m³</TableCell>
                  <TableCell>IPCC 2006</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>汽油燃烧</TableCell>
                  <TableCell>2.3519</TableCell>
                  <TableCell>kgCO2e/L</TableCell>
                  <TableCell>国家标准GB/T 2589</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">
            <MenuBook sx={{ mr: 1, verticalAlign: "middle" }} />
            {t("methodology.references")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Link
                href="https://www.ipcc.ch/report/ar6/wg1/"
                target="_blank"
                rel="noopener"
              >
                IPCC. (2021). Climate Change 2021: The Physical Science Basis.
              </Link>
            </li>
            <li>
              <Link
                href="https://ghgprotocol.org/corporate-standard"
                target="_blank"
                rel="noopener"
              >
                World Resources Institute. (2004). The Greenhouse Gas Protocol.
              </Link>
            </li>
            <li>
              <Link
                href="https://www.iso.org/standard/66453.html"
                target="_blank"
                rel="noopener"
              >
                ISO. (2018). ISO 14064-1:2018 Greenhouse gases — Part 1.
              </Link>
            </li>
            <li>国家发展改革委. (2022). 企业温室气体排放核算方法与报告指南.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
