const express = require('express');
const router = express.Router();

router.get('/piti-calculator', (req, res) => {
  res.render('piti_calculator_form', {
    title: 'PITI Calculator',
    author: 'Joe Bove',
    timePageLoadedAt: new Date(),

    // defaults for the form
    loan_term_years: 0,
    loan_term_months: '',
    other_monthly: '0.00'
  });
});

router.post('/piti-calculator', (req, res) => {
  const formData = req.body;

  const principal = Number(formData.principal);
  let annualRate = Number(formData.interest_rate);
  const years = Number(formData.loan_term_years || 0);
  const months = Number(formData.loan_term_months || 0);

  const annualPropertyTax = Number(formData.property_tax || 0);
  const annualHomeInsurance = Number(formData.home_insurance || 0);
  const otherMonthly = Number(formData.other_monthly || 0);

  if (Number.isFinite(annualRate) && annualRate > 1) annualRate /= 100;

  const n = (years * 12) + months;
  if (!Number.isFinite(n) || n <= 0) {
    return res.status(400).render('piti_calculator_form', {
      ...formData,
      title: 'PITI Calculator',
      error: 'Enter a loan term in months and/or years (total must be at least 1 month).'
    });
  }

  const r = annualRate / 12;
  const monthlyTax = annualPropertyTax / 12;
  const monthlyIns = annualHomeInsurance / 12;

  let monthlyPI;
  if (r === 0) monthlyPI = principal / n;
  else monthlyPI = (principal * r) / (1 - Math.pow(1 + r, -n));

  const monthlyPITI = monthlyPI + monthlyTax + monthlyIns + otherMonthly;

  // Minimum required income where PITI is 40% of income (front-end ratio)
  const minMonthlyIncome = monthlyPITI / 0.40;
  formData.min_income_monthly = minMonthlyIncome.toFixed(2);
  formData.min_income_annual = (minMonthlyIncome * 12).toFixed(2);

  // Optional: amortization schedule (PI only)
  const amortization = [];
  let balance = principal;
  for (let m = 1; m <= n; m++) {
    const interestPaid = balance * r;
    let principalPaid = monthlyPI - interestPaid;
    if (principalPaid > balance) principalPaid = balance;
    balance -= principalPaid;

    amortization.push({
      month: m,
      payment: monthlyPI.toFixed(2),
      interest: interestPaid.toFixed(2),
      principal: principalPaid.toFixed(2),
      balance: Math.max(balance, 0).toFixed(2),
    });
    if (balance <= 0) break;
  }


  res.render('piti_calculator_form', {
    ...formData,

    // flags
    results: true,
    has_other_monthly: otherMonthly > 0,

    // nice displays
    loan_term_display: `${years} years ${months} months (${n} months)`,

    // computed results
    principal_and_interest: monthlyPI.toFixed(2),
    monthly_property_tax: monthlyTax.toFixed(2),
    monthly_home_insurance: monthlyIns.toFixed(2),
    other_monthly: otherMonthly.toFixed(2),
    monthly_payment: monthlyPITI.toFixed(2),
    amortization
  });
});

module.exports = router;