/* src/constants.ts */
import {
  Users, Shield, Eye, Building2, Target, TrendingUp, Scale
} from 'lucide-react'

export const whoWeServe = [
  { icon: Shield, title: "Insurers", points: ["Transparent reasoning", "Consistent standards", "Faster approvals"] },
  { icon: Users, title: "TPAs", points: ["Cross-vendor consistency", "Audit-ready reporting", "Lower rework"] },
  { icon: Building2, title: "Contractors", points: ["Complete scopes", "Less back-and-forth", "Higher win rates"] },
];

export const whyRoitechPillars = [
  { icon: Target, title: "Domain Intelligence", desc: "Built specifically for restoration work, not adapted from other industries", gradient: "from-blue-500 to-blue-600" },
  { icon: Users, title: "Ease of Use", desc: "Intuitive interface designed for field workers and office staff alike", gradient: "from-teal-500 to-teal-600" },
  { icon: Eye, title: "Transparency", desc: "Every decision is explainable, auditable, and backed by clear reasoning", gradient: "from-orange-500 to-orange-600" },
  { icon: TrendingUp, title: "Scalability", desc: "Grows with your business from single projects to enterprise-wide deployment", gradient: "from-green-500 to-green-600" }
];

export const securityFeatures = [
  { icon: Eye, title: "Traceability", desc: "Every line item backed by explainable reasoning." },
  { icon: Scale, title: "Standards", desc: "Built to align with carrier and industry guidelines." },
  { icon: Shield, title: "Data Protection", desc: "Encryption in transit and at rest. SOC 2–ready posture." },
];