const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'PITI Calculator',
    author: 'Joe Bove',
    timePageLoadedAt: new Date()
  });
});

router.get('/piti-calculator', (req, res) => {
  res.render('piti_calculator_form', {
    title: 'PITI Calculator',
    author: 'Joe Bove',
    timePageLoadedAt: new Date()
  });
});

// ✅ handle the POST from your form
router.post('/submit-piti', (req, res) => {
  const formData = req.body;

  const principal = Number(formData.principal);
  let annualRate = Number(formData.interest_rate);
  const years = Number(formData.loan_term_years);
  const months = Number(formData.loan_term_months);

  const annualPropertyTax = Number(formData.property_tax);
  const annualHomeInsurance = Number(formData.home_insurance);
  const otherMonthly = Number(formData.other_monthly || 0);
  
  formData.has_other_monthly = otherMonthly > 0;

  // normalize percent -> decimal
  if (Number.isFinite(annualRate) && annualRate > 1) annualRate /= 100;

  const n = (years * 12) + months;   // ✅ total months
  const r = annualRate / 12;

  const monthlyTax = annualPropertyTax / 12;
  const monthlyIns = annualHomeInsurance / 12;

  let monthlyPI;
  if (r === 0) monthlyPI = principal / n;
  else monthlyPI = (principal * r) / (1 - Math.pow(1 + r, -n));

  const monthlyPITI = monthlyPI + monthlyTax + monthlyIns + otherMonthly;

  // Build amortization schedule (Principal + Interest only)
    const amortization = [];
    let balance = principal;

    for (let m = 1; m <= n; m++) {
    const interestPaid = balance * r;
    let principalPaid = monthlyPI - interestPaid;

    // Protect against tiny rounding issues on the last payment
    if (principalPaid > balance) principalPaid = balance;

    balance = balance - principalPaid;

    amortization.push({
        month: m,
        payment: monthlyPI.toFixed(2),
        interest: interestPaid.toFixed(2),
        principal: principalPaid.toFixed(2),
        balance: Math.max(balance, 0).toFixed(2),
    });

    if (balance <= 0) break;
    }

  // pass to HBS
  formData.amortization = amortization;

  // Values for your thank-you page
  formData.principal_and_interest = monthlyPI.toFixed(2);
  formData.monthly_property_tax = monthlyTax.toFixed(2);
  formData.monthly_home_insurance = monthlyIns.toFixed(2);
  formData.other_monthly = otherMonthly.toFixed(2);
  formData.monthly_payment = monthlyPITI.toFixed(2);

  res.render('thank_you', formData);
});

module.exports = router;