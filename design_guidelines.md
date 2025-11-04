# Design Guidelines: Professional Resume Website

## Design Approach

**System Selected**: Apple Human Interface Guidelines-inspired minimalism with academic publication aesthetics

**Rationale**: This is a utility-focused, information-dense application where content hierarchy and readability are paramount. The design must convey professionalism, ensure quick scanning by recruiters, and maintain PDF-compatible formatting. Drawing from Apple's content-first approach and academic CV design principles.

## Typography System

**Font Families**:
- Primary: Inter (via Google Fonts) - clean, highly legible sans-serif for headers and body
- Accent: JetBrains Mono (via Google Fonts) - for technical skills, code references, GPA display

**Type Scale**:
- Name/Header: text-4xl to text-5xl, font-bold (48-60px equivalent)
- Section Headers: text-2xl, font-semibold, uppercase tracking-wide
- Position Titles: text-lg, font-semibold
- Organization/Dates: text-base, font-medium
- Body/Descriptions: text-base, leading-relaxed
- Contact Info: text-sm
- PDF Download Button: text-sm, font-medium

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16 consistently
- Section margins: mb-12 to mb-16
- Item spacing within sections: mb-6 to mb-8
- Line item spacing: mb-4
- Inline element gaps: gap-2, gap-4

**Container Structure**:
- Max width: max-w-4xl (optimized for resume readability and PDF export)
- Horizontal padding: px-8 on desktop, px-6 on mobile
- Top/bottom padding: py-12 to py-16

**Grid Layout**:
- Single column for mobile (base)
- Smart 2-column for desktop where appropriate (education + GPA, dates aligned right)
- Use flexbox with justify-between for position title/date pairs

## Component Library

### Header Section
- Full name prominently displayed at top
- Contact information row: email, LinkedIn, GitHub with subtle separators (|)
- PDF download button: top-right corner, sticky or fixed position for easy access
- Icons from Heroicons (outline style) for contact methods

### Resume Sections
**Standard Section Pattern**:
- Section header with horizontal divider line below (border-b with subtle treatment)
- Consistent vertical spacing between section header and content
- Each entry uses consistent card-like spacing without actual card backgrounds

**Experience Items**:
- Position title + Company name on first line (bold vs. regular weight differentiation)
- Date range aligned to the right on same line
- Location/Department as subtitle
- Bullet points for achievements with proper indentation (pl-6)
- Use list markers (•) with custom styling

**Education Items**:
- Institution name prominent
- Degree and major on second line
- Date range aligned right
- GPA displayed with monospace font treatment
- Special programs/sessions as sub-items

**Awards Section**:
- Year + Award name format
- Organization/Context as subtitle
- Brief description where relevant
- Chronological order (most recent first)

**Skills Section**:
- Clean horizontal list with pill-style tags
- Subtle borders, rounded corners (rounded-full)
- Adequate spacing between items (gap-3)
- Group by category if needed (Languages, Frameworks, Tools)

**Teaching Section**:
- Course code + name
- Date range
- Presented as part of experience or separate section

### Interactive Elements

**PDF Download Button**:
- Fixed position top-right or prominent placement in header
- Icon + text ("Download PDF" or "Export Resume")
- Primary action styling (solid background with appropriate hover state)
- Heroicons download icon

**Links**:
- Underline on hover for text links
- Contact icons clickable with subtle hover indication
- External link indicators for GitHub/LinkedIn

## Visual Hierarchy Principles

1. **Name as Primary Focus**: Largest text element, immediately establishes identity
2. **Section Scanning**: Clear section headers with visual separation enable quick navigation
3. **Date Alignment**: Consistent right-alignment of dates creates clean vertical scan line
4. **Content Density**: Balanced whitespace - professional but not sparse, comprehensive but not cramped
5. **Action Clarity**: PDF download prominently accessible without disrupting content flow

## Responsive Behavior

**Desktop (lg: 1024px+)**:
- 2-column layouts where logical (title/date, education/GPA)
- Optimal line length for reading (max-w-4xl container)
- Fixed PDF button position

**Tablet (md: 768px)**:
- Maintain 2-column where possible
- Slightly reduced spacing scale
- Dates may move below titles if needed

**Mobile (base: <768px)**:
- Full single-column stack
- Dates below position titles
- Maintained section hierarchy
- Touch-friendly PDF button placement

## Accessibility Requirements

- Semantic HTML5 structure (header, main, sections with proper headings h1-h3)
- Sufficient contrast ratios for all text
- Focus indicators on interactive elements
- Descriptive link text and button labels
- Proper heading hierarchy (h1 for name, h2 for sections, h3 for positions)
- Skip-to-content considerations if navigation added

## Images

**No hero image required** - This is a professional resume format where content takes absolute priority. The design relies on typography and layout excellence rather than imagery.

## Print/PDF Optimization

- Single-page or clean multi-page breaks
- Print-friendly spacing and margins
- No background treatments that waste ink
- Ensure borders and dividers are subtle enough for printing
- Test page breaks fall at logical section boundaries
- PDF export should maintain exact visual hierarchy of web version

## Key Design Principles

1. **Content First**: Every design decision serves content clarity
2. **Professional Restraint**: Minimal embellishment, maximum impact through hierarchy
3. **Scan-Optimized**: Recruiters should find key information in under 30 seconds
4. **PDF-Ready**: Design translates perfectly to exported PDF format
5. **Academic Credibility**: Visual language conveys research/technical competence